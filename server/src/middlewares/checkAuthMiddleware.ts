import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface IDecodedToken {
    id: string
    email: string
    iat: number
    exp: number
}

const checkAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Пользователь не авторизован' });
    if (!process.env.JWT_SECRET_KEY) return res.status(400).json({ message: 'Ошибка авторизации' });
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if(err || !decoded) return res.status(400).json({ message: 'Ошибка авторизации' });
        req.decodedToken = decoded as IDecodedToken;    
        next();
    });
};

export default checkAuthMiddleware;