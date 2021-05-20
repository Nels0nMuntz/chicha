import { Error } from 'mongoose';
import UserModel, { IUserDomain, IUserModel, IUserDocument } from '../models/UserModel';
import { IRepository } from '../types'


class UserRepository {

    private model: IUserModel = UserModel

    public exists = async (id: string): Promise<boolean> => {
        const document = await this.model.findById(id)
        return !!document === true;
    }

    public save = async (user: IUserDomain): Promise<IUserDocument> => {
        return await this.model.create(user);
    }

    public delete = async (user: IUserDomain): Promise<any> => {
        return await this.model.findOneAndDelete({ email: user.email })
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
        if(!res) throw new Error('Пользователь не найден');
        return res;
    }
};

export default UserRepository;