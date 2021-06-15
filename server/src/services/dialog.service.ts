import { DialogRepository, MessageRepository } from "../repositories";
import { IDialogDTO, DialogMap, IDialog } from './../models/DialogModel';

class DialogService {

    private dialogRepository : DialogRepository
    private messageRepository : MessageRepository

    constructor(){
        this.dialogRepository = new DialogRepository();
        this.messageRepository = new MessageRepository();
    }

    public getDialogs = async (id: string) : Promise<Array<IDialogDTO>> => {
        const dialogs = await this.dialogRepository.findAllByMemberId(id);
        const dialogsWithLastMessage = await Promise.all(dialogs.map(async dialog => {
            const lastMessage = await this.messageRepository.findLastOneByDialogId(dialog.id);
            dialog.messages.push(lastMessage);
            return dialog;
        }));
        const dialogsDto = dialogsWithLastMessage.map(dialog => DialogMap.toDTO(dialog, id));
        return dialogsDto;
    }

    public createDialog = async (dialog: IDialog, id: string) : Promise<IDialogDTO> => {
        const document = await this.dialogRepository.save(dialog);       
        const dialogDto = DialogMap.toDTO(document, id);
        return dialogDto;
    }

}

export default DialogService;