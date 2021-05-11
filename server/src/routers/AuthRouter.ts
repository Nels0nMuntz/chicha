import { Router } from 'express';
import { AuthController } from '../controllers';
import { signinValidation, signupValidation } from '../utils/validators/validators';


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
            signupValidation,
            this._controller.signup
        )

        this._router.post(
            '/signin',
            signinValidation,
            this._controller.signin
        )
    }
};

export default new AuthRouter().router;