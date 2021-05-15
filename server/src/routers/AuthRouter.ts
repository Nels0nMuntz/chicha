import { Router } from 'express';
import { AuthController } from '../controllers';
import { validator } from '../utils';


class AuthRouter {
    private _router: Router = Router();
    private _controller = AuthController;

    get router() {
        return this._router;
    }

    constructor() {
        this.initRoutes();
    }

    private initRoutes() {

        this._router.post(
            '/signup',
            validator.signup,
            this._controller.signup
        )

        this._router.post(
            '/signin',
            validator.signin,
            this._controller.signin
        )
    }
};

export default new AuthRouter().router;