import { Error } from 'mongoose';
import UserModel, { IUserDomain, IUserModel, IUserDocument } from '../models/UserModel';
import { IRepository } from '../types'

interface IUserRepository extends IRepository<IUserDomain> {
    findUserByEmail(email: string) : Promise<IUserDocument>
};

class UserRepository implements IUserRepository {

    private model: IUserModel = UserModel

    public exists = async (user: IUserDomain): Promise<boolean> => {
        const documentByEmail = await this.model.findOneByEmail(user.email);
        if(!!documentByEmail === true) return true;
        const documentByPhone = await this.model.findOneByPhoneNumber(user.phoneNumber);
        return !!documentByPhone === true;
    }

    public save = async (user: IUserDomain): Promise<IUserDocument> => {
        return await this.model.create(user);
    }

    public delete = async (user: IUserDomain): Promise<any> => {
        return await this.model.findOneAndDelete({ email: user.email })
    }

    public findUserByEmail = async (email: string) : Promise<IUserDocument> => {
        return await UserModel.findOneByEmail(email);
    }

    public findUserByPhoneNumber = async (phoneNumber: string) : Promise<IUserDocument> => {
        return await this.model.findOneByPhoneNumber(phoneNumber);
    }

};

export default UserRepository;