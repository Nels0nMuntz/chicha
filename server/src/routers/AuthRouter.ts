import { Router } from 'express';
import { AuthController } from '../controllers';
import { validator } from '../utils';


class AuthRouter {

    public router: Router
    private controller: AuthController

    constructor() {
        this.router = Router()
        this.controller = new AuthController()
        this.initRoutes();
    }

    private initRoutes() {

        this.router.post(
            '/signup',
            validator.signup,
            this.controller.signup
        )

        this.router.post(
            '/signin',
            validator.signin,
            this.controller.signin
        )
    }
};

export default AuthRouter;