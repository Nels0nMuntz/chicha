import MessageMopdel, { IMessageDocument, IMessageDomain, IMessageModel, IMessagePopulated } from '../models/MessageModel';
import { IRepository } from '../types';

interface IMessageRepository extends IRepository<IMessageDomain> {
    exists(id: string) : Promise<boolean>
    save(message: IMessageDomain) : Promise<IMessagePopulated>
    delete(id: string): Promise<IMessageDocument>
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

    save = async (message: IMessageDomain) : Promise<IMessagePopulated> => {
        const document = await this.model.create(message);
        const populated = await this.model.findById(document._id).populate('createdBy');
        if(!populated) throw new Error('Ошибка создания сообщения');
        return populated as IMessagePopulated;
    }

    delete = async (id: string) : Promise<IMessageDocument> => {
        const document = await this.model.findByIdAndDelete(id);
        if(!document) throw new Error('Ошибка удаления сообщения');
        return document;
    }

};

export default MessageRepository;