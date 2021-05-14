import { model, Document, Schema, Model } from 'mongoose';


export interface IUser {
    email: string
    firstName: string
    lastName: string
    phoneNumber: string
    password: string
    avatar?: string
    lastSeen?: Date
};

interface IUserDTO {
    id: string
    email: string
    firstName: string
    lastName: string
    phoneNumber: string
    avatar: string
    lastSeen: Date
};

interface IUserDomain {
    email: string
    firstName: string
    lastName: string | null
    phoneNumber: string
    password: string
    avatar: string | null
    lastSeen: Date
}

class UserMap {

    public static toDomain = (data: IUser): IUserDomain => ({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName ? data.lastName : null,
        phoneNumber: data.phoneNumber,
        password: data.password,
        avatar: data.avatar ? data.avatar : null,
        lastSeen: data.lastSeen ? data.lastSeen : new Date()
    })

    public static toDTO = (data: IUserDocument) : IUserDTO => ({
        id: data._id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName ? data.lastName : '',
        phoneNumber: data.phoneNumber,
        avatar: data.avatar ? data.avatar : '',
        lastSeen: data.lastSeen,
    })

}

interface IUserDocument extends IUserDomain, Document { };
interface IUserModel extends Model<IUserDocument> {
    findOneByEmail(email: string): Promise<IUserDocument>
};

const UserSchema: Schema = new Schema(
    {
        email: {
            type: String,
            required: true,
            index: { unique: true }
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
        },
        phoneNumber: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String
        },
        lastSeen: {
            type: Date,
            default: new Date()
        }
    },
    {
        timestamps: true
    }
);

UserSchema.statics.findOneByEmail = async function (this: Model<IUserDocument>, email: string) {
    return await this.findOne({ email }).exec()
};

const UserModel = model<IUserDocument, IUserModel>("User", UserSchema);

export default UserModel;