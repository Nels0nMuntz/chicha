
import { Document, Schema, model, Model } from 'mongoose';
import { IDialogDocument } from './DialogModel';
import { IUserDocument, IUserDTO, UserMap } from './UserModel';

export interface IMessage {
    dialog: IDialogDocument["_id"]
    createdBy: IUserDocument["_id"]
    text: string
    read: boolean
};

export interface IMessageDTO {
    id: IMessageDocument["_id"]
    dialog: IDialogDocument["_id"]
    createdBy: IUserDTO
    text: string
    read: boolean
};

export interface IMessageDomain {
    dialog: IDialogDocument["_id"]
    createdBy: IUserDocument["_id"]
    text: string
    read: boolean
};

export interface IMessageDocument extends IMessageDomain, Document { };

export interface IMessageModel extends Model<IMessageDocument> { };

const MessageSchema = new Schema(
    {
        dialog:{
            type: Schema.Types.ObjectId,
            ref: "Dialog",
            required: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        text: String,
        read: Boolean,
    },
    {
        timestamps: true
    }
);

const MessageMopdel = model<IMessageDocument>("Message", MessageSchema);

export default MessageMopdel;

export class MessageMap {

    public static toDomain = (message: IMessage) : IMessageDomain => ({
        dialog: message.dialog,
        createdBy: message.createdBy,
        text: message.text,
        read: message.read
    })

    public static toDTO = (message: IMessageDocument) : IMessageDTO => ({
        id: message._id,
        dialog: message.dialog,
        createdBy: message.createdBy,
        text: message.text,
        read: message.read
    })

};