import MessageMopdel, { IMessageDocument, IMessageDomain, IMessageModel, IMessagePopulated } from '../models/MessageModel';
import { IRepository } from '../types';

interface IMessageRepository extends IRepository<IMessageDomain> {
    exists(id: string) : Promise<boolean>
    save(message: IMessageDomain) : Promise<IMessageDocument>
    delete(id: string): Promise<IMessageDocument>
    findAllByDialogId(id: string) : Promise<Array<IMessagePopulated>>
};

class MessageRepository implements IMessageRepository {

    private model: IMessageModel

    constructor(){
        this.model = MessageMopdel
    }
    
    exists = async (id: string) : Promise<boolean> => {
        const document = await this.model.findById(id);
        return !!document;
    }

    save = async (message: IMessageDomain) : Promise<IMessageDocument> => {
        const document = await this.model.create(message);
        return document;
    }

    delete = async (id: string) : Promise<IMessageDocument> => {
        const document = await this.model.findByIdAndDelete(id);
        if(!document) throw new Error('Ошибка удаления сообщения');
        return document;
    }

    findAllByDialogId = async (id: string) : Promise<Array<IMessagePopulated>> => {
        const messages = await this.model.find({ dialog: id }).populate('createdBy');
        return messages as Array<IMessagePopulated>;
    }

};

export default MessageRepository;