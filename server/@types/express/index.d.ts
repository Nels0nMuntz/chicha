import { IDecodedToken } from './../../src/middlewares/checkAuthMiddleware';

declare global{
    namespace Express {
        interface Request {
            decodedToken: IDecodedToken
        }
    }
}