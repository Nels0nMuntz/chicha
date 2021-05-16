import bcrypt from 'bcrypt';

import { IUser, IUserDocument, IUserDTO, IUserDomain } from '../models/UserModel';
import { SigninReqData } from '../controllers/AuthController'
import { UserRepository } from '../repositories';
import { Error } from 'mongoose';


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

export class UserMap {

    public static toDomain = (data: IUser): IUserDomain => ({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName ? data.lastName : null,
        phoneNumber: data.phoneNumber,
        password: data.password,
        avatar: data.avatar ? data.avatar : null,
        lastSeen: data.lastSeen ? data.lastSeen : new Date()
    })

    public static toDTO = (data: IUserDocument): IUserDTO => ({
        id: data._id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName ? data.lastName : '',
        phoneNumber: data.phoneNumber,
        avatar: data.avatar ? data.avatar : '',
        lastSeen: data.lastSeen,
    })

};