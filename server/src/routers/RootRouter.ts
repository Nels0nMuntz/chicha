import { Router } from 'express';
import { checkAuthMW } from '../middlewares';
import AuthRouter from './authRouter';
import DialogRouter from './dialogRouter';
import UserRouter from './userRouter';


class RootRouter {

    public router: Router
    private authRouter: AuthRouter
    private userRouter: UserRouter
    private dialogRouter: DialogRouter

    constructor(){
        this.router = Router()
        this.authRouter = new AuthRouter()
        this.userRouter = new UserRouter()
        this.dialogRouter = new DialogRouter()
        this.initRouters()
    }

    initRouters(){
        this.router.use('/auth', this.authRouter.router)
        this.router.use('/', checkAuthMW, this.userRouter.router)
        this.router.use('/dialogs', checkAuthMW, this.dialogRouter.router)
    }
}

export default new RootRouter().router;