import { Request, Response} from 'express';
const bcrypt = require('bcryptjs');
import db from '../database'; //se conecta a la base de datos

class AdminController{

    public async list (req: Request,res: Response) {
        const admins = await db.query('SELECT * FROM administrador');
        res.json(admins);
    } 
    public async getOne (req: Request,res: Response): Promise<void> {
        const { id } = req.params;
        const admin = await db.query('SELECT * FROM administrador WHERE id = ?', [id]);
        if(admin.length > 0){
            res.json(admin[0]);
        }else{
            res.status(404).json({message: "El admin no existe no existe"});
        }
        
    } 
    public async create(req: Request,res: Response): Promise<void>{
        console.log(req.body);
        const nuevoAdmin = {
            usuario: req.body.usuario,
            password: bcrypt.hashSync(req.body.password, 10)
        }
        await db.query('INSERT INTO administrador set ?', [nuevoAdmin]);
        res.json({message: 'admin creado'});
    }
    public async update(req: Request,res: Response){
        const { id } = req.params;
        const admin = await db.query('UPDATE administrador set ? WHERE id = ?', [req.body, id]);
        console.log(admin);
        res.json({message: 'actualizando un admin '+ req.params.id});
    }
    public async delete(req: Request,res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM administrador WHERE id = ?', [id]);
        res.json({ message: "El administrador fue eliminado" });
    }

}

const adminController = new AdminController();
export default adminController;