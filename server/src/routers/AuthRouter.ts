import { Router } from 'express';
import { AuthController } from '../controllers';

class AuthRouter {
    private _router: Router = Router();
    private _controller = AuthController;

    get router(){
        return this._router;
    }

    constructor(){
        this.initRoutes();
    }

    private initRoutes(){
        this._router.post(
            '/signin',
            this._controller.signin
        )
    }
}

export default new AuthRouter().router;