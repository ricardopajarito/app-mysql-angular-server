import express, { Router } from 'express';
import adminController from '../controllers/adminController';

class AdminRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', adminController.list);
        this.router.get('/:id', adminController.getOne);
        this.router.post('/', adminController.create);
        this.router.put('/:id', adminController.update);
        this.router.delete('/:id', adminController.delete);
    }
}

const adminRoutes = new AdminRoutes();
export default adminRoutes.router;