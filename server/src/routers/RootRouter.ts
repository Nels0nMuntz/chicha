import { Router } from 'express';
import { checkAuthMW } from '../middlewares';
import AuthRouter from './AuthRouter';
import DialogRouter from './dialogRouter';
import MessageRouter from './messageRouter';
import UserRouter from './UserRouter';


class RootRouter {

    public router: Router
    private authRouter: AuthRouter
    private userRouter: UserRouter
    private dialogRouter: DialogRouter
    private messageRouter: MessageRouter

    constructor(){
        this.router = Router();
        this.authRouter = new AuthRouter();
        this.userRouter = new UserRouter();
        this.dialogRouter = new DialogRouter();
        this.messageRouter = new MessageRouter();
        this.initRouters();
    }

    initRouters(){
        this.router.use('/auth', this.authRouter.router);
        this.router.use('/', checkAuthMW, this.userRouter.router);
        this.router.use('/dialogs', checkAuthMW, this.dialogRouter.router);
        this.router.use('/message', checkAuthMW, this.messageRouter.router)
    }
}

export default new RootRouter().router;