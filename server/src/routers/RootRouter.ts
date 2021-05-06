import { Router } from 'express';
import AuthRouter from './AuthRouter';
import UserRouter from './UserRouter';


class RootRouter {
    private _router: Router = Router();

    get router(){
        return this._router;
    }

    constructor(){
        this.initRouters();
    }

    initRouters(){
        this._router.use('/', UserRouter);
        this._router.use('/auth', AuthRouter);
    }
}

export default new RootRouter().router;