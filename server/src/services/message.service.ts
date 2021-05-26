import { IMessage, IMessageDTO, MessageMap } from '../models/MessageModel';
import { MessageRepository } from '../repositories';
import { IMessageDocument } from './../models/MessageModel';

class MessageService {

    private repository: MessageRepository

    constructor(){
        this.repository = new MessageRepository();
    }

    create = async (message: IMessage) : Promise<IMessageDocument> => {
        const messageDomain = MessageMap.toDomain(message);
        const document = await this.repository.save(messageDomain);
        return document;
    }

    getAllByDialogId = async (id: string) : Promise<Array<IMessageDTO>> => {
        const messagesPopulated = await this.repository.findAllByDialogId(id);
        const messagesDto = messagesPopulated.map(msg => MessageMap.toDTO(msg));
        return messagesDto;
    }

};

export default MessageService;