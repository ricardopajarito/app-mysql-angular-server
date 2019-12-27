import { Request, Response} from 'express';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';
import db from '../database'; //se conecta a la base de datos

class IndexController{

    public index (req: Request,res: Response) {
        res.send('index');
    } 
    public async login (req: Request,res: Response): Promise<void> {
        let usuario = req.body.usuario;
        let password = req.body.password;
        const expiresIn = 24 * 60 * 60;

        const admin = await db.query('SELECT * FROM administrador WHERE usuario = ?', [usuario]);
        if(admin.length === 0){
            const profesor = await db.query('SELECT * FROM profesor WHERE usuario = ?', [usuario]);
            if(profesor.length === 0){
                const alumno = await db.query('SELECT * FROM alumno WHERE usuario = ?', [usuario]);
                if(alumno.length === 0){
                    res.status(400).json({
                        ok: false,
                        err: {
                            message: 'Usuario o contraseña incorrectos'
                        }
                    });
                }else{
                    //console.log(alumno[0].password);
                    if (!bcrypt.compareSync(password, alumno[0].password)) {
                        res.status(400).json({
                            ok: false,
                            err: {
                                message: 'Usuario o contraseña incorrectos'
                            }
                        });
                    }else{
                        const accessToken = jwt.sign({ id: alumno[0].id }, SECRET_KEY, { expiresIn: expiresIn });
                        const dataUser = {
                            ok: true,
                            usuario: alumno[0],
                            rol: 3,
                            accessToken: accessToken,
                            expiresIn: expiresIn
                        }
                        res.send({ dataUser });
                    }
                }
            }else{
                if (!bcrypt.compareSync(password, profesor[0].password)) {
                    res.status(400).json({
                        ok: false,
                        err: {
                            message: 'Usuario o contraseña incorrectos'
                        }
                    });
                }else{
                    const accessToken = jwt.sign({ id: profesor[0].id }, SECRET_KEY, { expiresIn: expiresIn });
                    const dataUser = {
                        ok: true,
                        usuario: profesor[0],
                        rol: 2,
                        accessToken: accessToken,
                        expiresIn: expiresIn
                    }
                    res.send({ dataUser });
                }
            }
        }else{
            if (!bcrypt.compareSync(password, admin[0].password)) {
                res.status(400).json({
                    ok: false,
                    err: {
                        message: 'Usuario o contraseña incorrectos'
                    }
                });
            }else{
                const accessToken = jwt.sign({ id: admin[0].id }, SECRET_KEY, { expiresIn: expiresIn });
                const dataUser = {
                    ok: true,
                    usuario: admin[0],
                    rol: 1,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                }
                res.send({ dataUser });
            }
        }
    } 
}

const indexController = new IndexController();
export default indexController;