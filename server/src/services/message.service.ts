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

    getLastOneByDialogId = async (id: string) : Promise<IMessageDTO | null> => {
        const messageDocument = await this.repository.findLastOneByDialogId(id);
        if(!messageDocument) return null;
        const messageDto = MessageMap.toDTO(messageDocument);
        return messageDto;
    }

};

export default MessageService;