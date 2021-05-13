import { Error } from 'mongoose';
import UserModel, { IUser, IUserDTO, IUserDomain, IUserModel, IUserDocument } from '../models/UserModel';
import { IRepository } from '../types'

interface IUserRepository extends IRepository<IUser> {
    findUserByEmail(email: string) : Promise<IUserDTO>
};

class UserRepository implements IUserRepository {

    private model: IUserModel = UserModel

    public exists = async (user: IUser): Promise<boolean> => {
        const document = await this.model.findOneByEmail(user.email)
        return !!document === true;
    }

    public save = async (user: IUser): Promise<IUserDTO> => {
        const isExists = await this.exists(user);
        if (isExists) throw new Error('Пользователь с таким email уже существует')
        const userDomain = UserMap.toDomain(user);
        const document = await this.model.create(userDomain);
        return UserMap.toDTO(document);
    }

    public delete = async (user: IUser): Promise<any> => {
        return await this.model.findOneAndDelete({ email: user.email })
    }

    public findUserByEmail = async (email: string) : Promise<IUserDTO> => {
        const document = await UserModel.findOneByEmail(email);
        return UserMap.toDTO(document);
    }

};

const userRepository = new UserRepository();

export default userRepository;

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