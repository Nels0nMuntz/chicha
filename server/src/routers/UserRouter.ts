import { Router } from 'express';
import { UserController } from '../controllers';
import { checkAuthMW} from '../middlewares';

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
            checkAuthMW,
            this._controller.index
        )
    }
}

export default new UserRouter().router;