import { Document, Schema, Model, model } from 'mongoose';
import { IUserDocument, IUserDTO, UserMap } from "./UserModel";

export interface IDialog {
    participant_1: string
    participant_2: string
}

export interface IDialogDTO {
    id: IDialogDocument["_id"]
    participant: IUserDTO
}

export interface IDialogDomain {
    participant_1: IUserDocument["_id"]
    participant_2: IUserDocument["_id"]
}

export interface IDialogDocument extends Document, IDialogDomain { };

export interface IDialogPopulated {
    id?: IUserDocument["_id"]
    participant_1: IUserDocument
    participant_2: IUserDocument
}

export interface IDialogModel extends Model<IDialogDocument> { };

const DialogSchema = new Schema(
    {
        participant_1: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        participant_2: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const DialogModel = model<IDialogDocument>("Dialog", DialogSchema);

export default DialogModel;

export class DialogMap {

    public static toDomain = (dialog: IDialog): IDialogDomain => ({
        participant_1: dialog.participant_1,
        participant_2: dialog.participant_2
    })

    public static toDTO = (dialog: IDialogPopulated, userId: string): IDialogDTO => {
        const dialogDto = {
            id: dialog.id,
            participant: dialog.participant_1.id !== userId ? dialog.participant_1 : dialog.participant_2
        };        
        return ({
            ...dialogDto,
            participant: UserMap.toDTO(dialogDto.participant)
        })
    }

};