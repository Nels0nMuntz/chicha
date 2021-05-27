import { Router } from "express";
import { MessageController } from "../controllers";

class MessageRouter {

    public router: Router
    private controller: MessageController

    constructor(){
        this.router = Router();
        this.controller = new MessageController();
        this.initRoutes();
    }

    private initRoutes = () => {
        this.router.post('/create', this.controller.create);
        this.router.post('/last', this.controller.getAllLast)
    }

};

export default MessageRouter;