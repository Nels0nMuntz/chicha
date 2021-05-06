import { Router } from 'express';
import { UserController } from '../controllers';
import { checkAuthMiddleware } from '../middlewares';

class UserRouter {

    private _router: Router = Router()
    private _controller = UserController

    get router() {
        return this._router;
    }

    constructor(){
        this.initRoutes();
    }

    private initRoutes = () => {
        this._router.get(
            '/im',
            checkAuthMiddleware,
            this._controller.getUserData
        )
    }
}

export default new UserRouter().router;