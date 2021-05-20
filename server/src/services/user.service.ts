import { IUserDTO, UserMap } from "../models/UserModel";
import { UserRepository } from "../repositories";

interface IUserService {
    getUser(id: string) : Promise<IUserDTO>
};

class UserService implements IUserService {

    private repository: UserRepository

    constructor(){
        this.repository = new UserRepository();
    }

    public getUser = async (id: string) : Promise<IUserDTO> => {
        const document = await this.repository.findUserById(id);
        return UserMap.toDTO(document);
    }

    public search = async (queryParam: string) : Promise<Array<IUserDTO>> => {
        const documents =  await this.repository.findUserByQueryParam(queryParam);
        return documents.map(document => UserMap.toDTO(document));
    }

};

export default UserService;