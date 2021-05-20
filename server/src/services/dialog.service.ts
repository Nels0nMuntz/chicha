import { DialogRepository } from "../repositories";
import { IDialogDTO, DialogMap, IDialog } from './../models/DialogModel';

class DialogService {

    private repository : DialogRepository

    constructor(){
        this.repository = new DialogRepository();
    }

    public getDialogs = async (id: string) : Promise<Array<IDialogDTO>> => {
        const dialogs = await this.repository.findAllById(id);
        const dialogsDto = dialogs.map(dialog => DialogMap.toDTO(dialog));
        return dialogsDto;
    }

    public createDialog = async (dialog: IDialog) : Promise<IDialogDTO> => {
        const document = await this.repository.save(dialog);
        const dialogDto = DialogMap.toDTO(document);
        return dialogDto;
    }

}

export default DialogService;