import { IRepository } from "../types";
import DialogModel, { IDialog, IDialogDocument, IDialogModel, IDialogPopulated } from './../models/DialogModel';


interface IDialogRepository extends IRepository<IDialog> {
    exists(id: string): Promise<boolean>
    save(dialog: IDialog): Promise<IDialogPopulated>
    delete(id: string): Promise<IDialogDocument>
    findAllByMemberId(id: string): Promise<Array<IDialogPopulated>>
};

class DialogRepository implements IDialogRepository {

    private model: IDialogModel

    constructor() {
        this.model = DialogModel
    }

    public exists = async (id: string): Promise<boolean> => {
        const document = await this.model.findById(id);
        return !!document;
    }

    public save = async (dialog: IDialog): Promise<IDialogPopulated> => {
        const document = await this.model.create(dialog);
        const populated = await this.model.findById(document.id)
            .populate('memberId_1')
            .populate('memberId_2');
        if (!populated) throw new Error('Ошибка создания диалога');
        return populated;
    }

    public delete = async (id: string): Promise<IDialogDocument> => {
        const document = await this.model.findOneAndDelete({ id: id });
        if (!document) throw new Error('Ошибка удаления диалога');
        return document;
    }

    public findAllByMemberId = async (id: string): Promise<Array<IDialogPopulated>> => {
        const documents = await this.model.find({
            $or: [
                { memberId_1: id },
                { memberId_2: id },
            ]
        })
            .populate('memberId_1')
            .populate('memberId_2');
        return documents as Array<IDialogPopulated>;
    }

};

export default DialogRepository;