import { Request, Response } from 'express';

class AuthController{

    signin = async (req: Request, res: Response) => {
        return res.status(200).json({ message: 'success' })
    }

}

export default new AuthController();