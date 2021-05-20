import { IRepository } from "../types";
import DialogModel, { IDialog, IDialogDTO, IDialogDocument, IDialogModel } from './../models/DialogModel';


interface IDialogRepository extends IRepository<IDialog> {
    exists(id: string) : Promise<boolean>
    save(dialog: IDialog) : Promise<IDialogDocument>
    delete(dialog: IDialogDTO) : Promise<IDialogDocument>
    findAllById(id: string) : Promise<Array<IDialogDocument>>
}

class DialogRepository implements IDialogRepository {

    private model: IDialogModel

    constructor() {
        this.model = DialogModel
    }

    public exists = async (id: string): Promise<boolean> => {
        const document = await this.model.findById(id);
        return !!document;
    }

    public save = async (dialog: IDialog) : Promise<IDialogDocument> => {
        const document = await this.model.create(dialog);
        return document;
    }

    public delete = async (dialog: IDialogDTO) : Promise<IDialogDocument> => {
        const document = await this.model.findOneAndDelete({ id: dialog.id });
        if(!document) throw new Error('Ошибка удаления диалога');
        return document;
    }

    public findAllById = async (id: string) : Promise<Array<IDialogDocument>> => {
        const documents = await this.model.find({
            $or: [
                { participant_1: id },
                { participant_2: id },
            ]
        }).exec();
        return documents;
    }

}

export default DialogRepository;