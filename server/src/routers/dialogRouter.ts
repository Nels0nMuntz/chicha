import { Router } from "express"
import { DialogController } from "../controllers"
import { checkAuthMW } from "../middlewares"

class DialogRouter {

    public router: Router
    private controller: DialogController

    constructor(){
        this.router = Router();
        this.controller = new DialogController();
        this.initRotes();
    }

    private initRotes = () => {
        this.router.get('/index', this.controller.getDialogs);
        this.router.post('/create', this.controller.create);
    }

}

export default DialogRouter;