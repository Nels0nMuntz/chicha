import { Router } from 'express';
import { UserController } from '../controllers';
import { checkAuthMW} from '../middlewares';

class UserRouter {

    public router: Router
    private controller: UserController

    constructor(){
        this.router = Router()
        this.controller = new UserController()
        this.initRoutes();
    }

    private initRoutes = () => {
        this.router.get(
            '/im',
            checkAuthMW,
            this.controller.index
        )
        this.router.get(
            '/search',
            this.controller.search
        )
    }
}

export default UserRouter;