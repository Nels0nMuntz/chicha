import { model, Document, Schema, Model } from 'mongoose';


export interface IUser {
    email: string
    password: string
    firstname: string
    lastname?: string
    phoneNumber: string
    avatar?: string
    lastSeen?: Date
}


interface IUserDocument extends IUser, Document {}
interface IUserModel extends Model<IUserDocument> {
    findOneByEmail(email: string): Promise<IUserDocument>
}

const UserSchema: Schema = new Schema(
    {
        email: {
            type: String,
            required: true,
            index: { unique: true }
        },
        password: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String
        },
        phoneNumber: {
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