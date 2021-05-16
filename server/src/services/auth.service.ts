import bcrypt from 'bcrypt';

import { IUser, IUserDTO, UserMap } from '../models/UserModel';
import { SigninReqData } from '../controllers/AuthController'
import { UserRepository } from '../repositories';


interface IAuthService {
    signup(user: IUser): Promise<IUserDTO>
    signin(data: SigninReqData): Promise<IUserDTO>
};

class AuthService implements IAuthService {

    private repository: UserRepository

    constructor() {
        this.repository = new UserRepository();
    }

    signup = async (user: IUser): Promise<IUserDTO> => {
        const hashPassword = bcrypt.hashSync(user.password, 7);
        const userDomain = UserMap.toDomain(user);
        const document = await this.repository.save({ ...userDomain, password: hashPassword });
        return UserMap.toDTO(document);
    }

    signin = async (data: SigninReqData): Promise<IUserDTO> => {
        const user = await this.repository.findUserByEmail(data.email);
        if (!user) throw new Error('Ошибка авторизации. Указан неверный email или пароль');
        const isPasswordValid = bcrypt.compareSync(data.password, user.password);
        if (!isPasswordValid) throw new Error('Ошибка авторизации. Указан неверный email или пароль');
        return UserMap.toDTO(user);
    }

};

export default AuthService;