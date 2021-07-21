import { Router } from 'express';
import { checkAuthMW } from '../middlewares';
import AuthRouter from './authRouter';
import DialogRouter from './dialogRouter';
import MessageRouter from './messageRouter';
import UserRouter from './userRouter';


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
        this.router.use('/messages', checkAuthMW, this.messageRouter.router)
    }
};

const rootRouter = new RootRouter().router;

export default rootRouter;