import { Error } from 'mongoose';
import UserModel, { IUserDomain, IUserModel, IUserDocument } from '../models/UserModel';
import { IRepository } from '../types'


interface IUserRepository extends IRepository<IUserDomain> {
    exists(id: string): Promise<boolean>
    save(user: IUserDomain): Promise<IUserDocument>
    delete(id: string): Promise<IUserDocument>
    findUserById(id: string) : Promise<IUserDocument>
    findUserByEmail(email: string) : Promise<IUserDocument>
    findUserByPhoneNumber(phoneNumber: string) : Promise<IUserDocument>
    findUserByQueryParam(queryParam: string) : Promise<Array<IUserDocument>>
};

class UserRepository implements IUserRepository {

    private model: IUserModel = UserModel

    public exists = async (id: string): Promise<boolean> => {
        const document = await this.model.findById(id)
        return !!document === true;
    }

    public save = async (user: IUserDomain): Promise<IUserDocument> => {
        return await this.model.create(user);
    }

    public delete = async (id: string): Promise<IUserDocument> => {
        const document = await this.model.findOneAndDelete({ id: id });
        if(!document) throw new Error('Ошибка удаления пользователя');
        return document;
    }

    public findUserById = async (id: string) : Promise<IUserDocument> => {
        const document = await this.model.findById(id);
        if(!document) throw new Error('Пользователь не найден');
        return document;
    }

    public findUserByEmail = async (email: string) : Promise<IUserDocument> => {
        return await this.model.findOneByEmail(email);
    }

    public findUserByPhoneNumber = async (phoneNumber: string) : Promise<IUserDocument> => {
        return await this.model.findOneByPhoneNumber(phoneNumber);
    }

    public findUserByQueryParam = async (queryParam: string) : Promise<Array<IUserDocument>> => {
        const pattern = new RegExp(queryParam, 'i')
        const res = await this.model.find({
            $or: [
                { firstName: pattern },
                { lastName: pattern },
                { phoneNumber: pattern }
            ]
        }).exec();
        if(!res) throw new Error('Ошибка при поиске пользователей');
        return res;
    }
};

export default UserRepository;