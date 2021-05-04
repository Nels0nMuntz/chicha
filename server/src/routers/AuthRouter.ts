import { Router } from 'express';
import { AuthController } from '../controllers';
import { authMiddleware } from '../middlewares';
import { signinValidation, signupValidation } from '../validators/validators';


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

        this.router.get(
            '/users',
            authMiddleware,
            AuthController.getUsers
        )
    }
};

export default new AuthRouter().router;