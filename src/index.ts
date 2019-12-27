import express from 'express';
import { Application } from 'express-serve-static-core';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import alumnosRoutes from './routes/alumnosRoutes';
import profesoresRoutes from './routes/profesoresRoutes';
import leccionesRoutes from './routes/leccionesRoutes';
import adminRoutes from './routes/adminRoutes';

class Server{

    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/alumnos',alumnosRoutes);
        this.app.use('/api/profesores',profesoresRoutes);
        this.app.use('/api/lecciones',leccionesRoutes);
        this.app.use('/api/admin',adminRoutes);
    }
    start(): void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Servidor en el puerto ', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();