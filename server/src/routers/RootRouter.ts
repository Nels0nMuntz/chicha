import { Router } from 'express';
import authRouter from './authRouter';


class RootRouter {
    private _router: Router = Router();

    get router(){
        return this._router;
    }

    constructor(){
        this.initRouters();
    }

    initRouters(){
        this._router.use('/', authRouter)
    }
}

export default new RootRouter().router;