import { Request, Response} from 'express';
const bcrypt = require('bcryptjs');
import db from '../database'; //se conecta a la base de datos

class AlumnosController{

    public async list (req: Request,res: Response) {
        const alumnos = await db.query('SELECT * FROM alumno');
        res.json(alumnos);
    } 
    public async listbyprofe (req: Request,res: Response) {
        const { id } = req.params;
        const alumnos = await db.query('SELECT * FROM alumno WHERE id_profesor = ?',[id]);
        res.json(alumnos);
    } 
    public async getOne (req: Request,res: Response): Promise<void> {
        const { id } = req.params;
        const alumno = await db.query('SELECT * FROM alumno WHERE id = ?', [id]);
        if(alumno.length > 0){
            res.json(alumno[0]);
        }else{
            res.status(404).json({message: "El alumno no existe"});
        }
        
    } 
    public async create(req: Request,res: Response): Promise<void>{
        console.log(req.body);
        const nuevoAlumno = {
            nombre: req.body.nombre,
            paterno: req.body.paterno,
            materno: req.body.materno,
            grado: req.body.grado,
            grupo: req.body.grupo,
            usuario: req.body.usuario,
            password: bcrypt.hashSync(req.body.password, 10),
            ortografia: 0,
            lectura: 0,
            gramatica: 0,
            id_profesor: req.body.id_profesor
        }
        const alumno = await db.query('SELECT * FROM alumno WHERE usuario = ?', [nuevoAlumno.usuario]);
        if(alumno.length > 0) {
            res.status(404).json({message: "El nombre de usuario que quieres registrar ya existe"});
        }else {
            await db.query('INSERT INTO alumno set ?', [nuevoAlumno]);
            res.json({message: 'alumno creado'});
        }
        
    }
    public async update(req: Request,res: Response){
        const { id } = req.params;
        if (req.body.password) {
            //console.log('viene el pass');
            const nuevoAlumno = {
                nombre: req.body.nombre,
                paterno: req.body.paterno,
                materno: req.body.materno,
                grado: req.body.grado,
                grupo: req.body.grupo,
                usuario: req.body.usuario,
                password: bcrypt.hashSync(req.body.password, 10),
                ortografia: 0,
                lectura: 0,
                gramatica: 0,
                id_profesor: req.body.id_profesor
            }
            const alumno = await db.query('UPDATE alumno set ? WHERE id = ?', [nuevoAlumno, id]);
            console.log(alumno);
            res.json({message: 'actualizando un alumno con cambio de pass '+ id});
        } else {
            //console.log('no viene el pass');
            const alumno = await db.query('UPDATE alumno set ? WHERE id = ?', [req.body, id]);
            console.log(alumno);
            res.json({message: 'actualizando un alumno sin cambio de pass '+ id});
        }
        
    }
    public async delete(req: Request,res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM alumno WHERE id = ?', [id]);
        res.json({ message: "El alumno fue eliminado" });
    }

}

const alumnosController = new AlumnosController();
export default alumnosController;