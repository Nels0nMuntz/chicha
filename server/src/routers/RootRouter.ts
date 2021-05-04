import { Router } from 'express';
import authRouter from './AuthRouter';


class RootRouter {
    private _router: Router = Router();

    get router(){
        return this._router;
    }

    constructor(){
        this.initRouters();
    }

    initRouters(){
        this._router.use('/auth', authRouter)
    }
}

export default new RootRouter().router;