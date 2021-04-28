import { model, Document, Schema } from 'mongoose';

interface IUser extends Document{
    email: string
    firstname: string
    lastname: string
    password: string
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

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;