import { Request, Response} from 'express';
const bcrypt = require('bcryptjs');
import db from '../database'; //se conecta a la base de datos

class ProfesoresController{

    public async list (req: Request,res: Response) {
        const profesores = await db.query('SELECT * FROM profesor');
        res.json(profesores);
    } 
    public async getOne (req: Request,res: Response): Promise<void> {
        const { id } = req.params;
        const profesor = await db.query('SELECT * FROM profesor WHERE id = ?', [id]);
        if(profesor.length > 0){
            res.json(profesor[0]);
        }else{
            res.status(404).json({message: "El profesor no existe"});
        }
        
    } 
    public async create(req: Request,res: Response): Promise<void>{
        console.log(req.body);
        const nuevoProfesor = {
            nombre: req.body.nombre,
            paterno: req.body.paterno,
            materno: req.body.materno,
            usuario: req.body.usuario,
            password: bcrypt.hashSync(req.body.password, 10),
            cedula: req.body.cedula
        }
        const profesor = await db.query('SELECT * FROM profesor WHERE usuario = ?', [nuevoProfesor.usuario]);
        if(profesor.length > 0) {
            res.status(404).json({message: "El nombre de usuario que quieres registrar ya existe"});
        }else{
            await db.query('INSERT INTO profesor set ?', [nuevoProfesor]);
            res.json({message: 'profesor creado'});
        }
    }
    public async update(req: Request,res: Response){
        const { id } = req.params;
        if (req.body.password) {
            const nuevoProfesor = {
                nombre: req.body.nombre,
                paterno: req.body.paterno,
                materno: req.body.materno,
                usuario: req.body.usuario,
                password: bcrypt.hashSync(req.body.password, 10),
                cedula: req.body.cedula
            }
            const profesor = await db.query('UPDATE profesor set ? WHERE id = ?', [nuevoProfesor, id]);
            console.log(profesor);
            res.json({message: 'actualizando un profesor con cambio de pass'+ id});
        } else {
            const profesor = await db.query('UPDATE profesor set ? WHERE id = ?', [req.body, id]);
            console.log(profesor);
            res.json({message: 'actualizando un profesor sin cambio de pass'+ id});
        }
        
    }
    public async delete(req: Request,res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM profesor WHERE id = ?', [id]);
        res.json({ message: "El profesor fue eliminado" });
    }

}

const profesoresController = new ProfesoresController();
export default profesoresController;