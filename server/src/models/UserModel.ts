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

export interface IUserDTO {
    id: string
    email: string
    firstName: string
    lastName: string
    phoneNumber: string
    avatar: string
    lastSeen: Date
};

export interface IUserDomain {
    email: string
    firstName: string
    lastName: string | null
    phoneNumber: string
    password: string
    avatar: string | null
    lastSeen: Date
}

export interface IUserDocument extends IUserDomain, Document { };
export interface IUserModel extends Model<IUserDocument> {
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
            required: true,
            index: { unique: true }
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