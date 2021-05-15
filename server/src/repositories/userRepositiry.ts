import { Error } from 'mongoose';
import UserModel, { IUserDomain, IUserModel, IUserDocument } from '../models/UserModel';
import { IRepository } from '../types'

interface IUserRepository extends IRepository<IUserDomain> {
    findUserByEmail(email: string) : Promise<IUserDocument>
};

class UserRepository implements IUserRepository {

    private model: IUserModel = UserModel

    public exists = async (user: IUserDomain): Promise<boolean> => {
        const document = await this.model.findOneByEmail(user.email)
        return !!document === true;
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

};

export default UserRepository;