import { IDecodedToken } from '../../src/middlewares/checkAuthMW';

declare global{
    namespace Express {
        interface Request {
            decodedToken: IDecodedToken
        }
    }
}