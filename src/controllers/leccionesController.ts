import { Request, Response} from 'express';
import db from '../database'; //se conecta a la base de datos

class LeccionesController{

    public async list (req: Request,res: Response) {
        const { tema, grado } = req.params;
        const lecciones = await db.query('SELECT * FROM lecciones WHERE tema = ? AND grado = ?', [tema , grado]);
        if(lecciones.length > 0){
            res.json(lecciones);
        }else{
            res.status(404).json({message: "Aún no hay lecciones disponibles"});
        }
    } 
    public async getOne (req: Request,res: Response): Promise<void> {
        const { id } = req.params;
        const leccion = await db.query('SELECT * FROM lecciones WHERE id = ?', [id]);
        if(leccion.length > 0){
            res.json(leccion[0]);
        }else{
            res.status(404).json({message: "La leccion no existe"});
        }
        
    } 
    public async create(req: Request,res: Response): Promise<void>{
        console.log(req.body);
        await db.query('INSERT INTO lecciones set ?', [req.body]);
        res.json({message: 'leccion creada'});
    }
    public async update(req: Request,res: Response){
        const { id } = req.params;
        const leccion = await db.query('UPDATE lecciones set ? WHERE id = ?', [req.body, id]);
        console.log(leccion);
        res.json({message: 'actualizando una leccion '+ req.params.id});
    }
    public async delete(req: Request,res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM lecciones WHERE id = ?', [id]);
        res.json({ message: "La leccion fue eliminada" });
    }

}

const leccionesController = new LeccionesController();
export default leccionesController;