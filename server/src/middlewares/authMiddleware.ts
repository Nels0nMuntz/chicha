import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'Пользователь не авторизован' });
    if (!process.env.JWT_SECRET_KEY) return res.status(400).json({ message: 'Ошибка авторизации' });
    const decodedToken  = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.decodedToken = decodedToken;
    next();
};

export default authMiddleware;