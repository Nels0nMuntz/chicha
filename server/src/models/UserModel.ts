import { model, Document, Schema, Model } from 'mongoose';

export interface IUserDocument extends Document{
    email: string
    firstname: string
    lastname: string
    password: string
}

interface IUserModel extends Model<IUserDocument>{
    findOneByEmail(email: string): Promise<IUserDocument>
}

const UserSchema : Schema = new Schema({
    email: {
        type: String,
        required: true,
        index: { unique: true }
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

UserSchema.statics.findOneByEmail = async function(this: Model<IUserDocument>, email: string) {
    return await this.findOne({ email }).exec()
};

const UserModel = model<IUserDocument, IUserModel>("User", UserSchema);

export default UserModel;