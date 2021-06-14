import { Document, Schema, Model, model } from 'mongoose';
import { IMessageDocument, IMessageDTO, MessageMap } from './MessageModel';
import { IUserDocument, IUserDTO, UserMap } from "./UserModel";

export interface IDialog {
    memberId_1: string
    memberId_2: string
}

export interface IDialogDTO {
    id: IDialogDocument["_id"]
    member: IUserDTO
    messages: Array<IMessageDTO| null>
}

export interface IDialogDomain {
    memberId_1: IUserDocument["_id"]
    memberId_2: IUserDocument["_id"]
    messages: []
}

export interface IDialogDocument extends Document, IDialogDomain { };

export interface IDialogPopulated {
    id?: IUserDocument["_id"]
    memberId_1: IUserDocument
    memberId_2: IUserDocument
    messages: Array<IMessageDocument | null>
}

export interface IDialogModel extends Model<IDialogDocument> { };

const DialogSchema = new Schema(
    {
        memberId_1: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        memberId_2: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        messages: [
            {
                type: Schema.Types.ObjectId,
                ref: "Message",
            }
        ]
    },
    {
        timestamps: true
    }
);

const DialogModel = model<IDialogDocument>("Dialog", DialogSchema);

export default DialogModel;

export class DialogMap {

    public static toDomain = (dialog: IDialog): IDialogDomain => ({
        memberId_1: dialog.memberId_1,
        memberId_2: dialog.memberId_2,
        messages: []
    })

    public static toDTO = (dialog: IDialogPopulated, userId: string): IDialogDTO => {
        const member = dialog.memberId_1.id === userId ? dialog.memberId_2 : dialog.memberId_1;
        return {
            id: dialog.id,
            member: UserMap.toDTO(member),
            messages: dialog.messages.map(message => message && MessageMap.toDTO(message))
        };
    }

};