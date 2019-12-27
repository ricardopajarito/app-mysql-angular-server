import express, { Router } from 'express';
import leccionesController from '../controllers/leccionesController';

class LeccionesRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/:tema/:grado', leccionesController.list);
        this.router.get('/:id', leccionesController.getOne);
        this.router.post('/', leccionesController.create);
        this.router.put('/:id', leccionesController.update);
        this.router.delete('/:id', leccionesController.delete);
    }
}

const leccionesRoutes = new LeccionesRoutes();
export default leccionesRoutes.router;