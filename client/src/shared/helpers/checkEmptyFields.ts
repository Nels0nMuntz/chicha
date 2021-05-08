import { ISignupData } from "../../store/auth/types";

const checkEmptyFields = (fields: ISignupData) => {
    const obj : {[key: string]: string | null} = {};
    for(let field in fields){
        if(!field) obj[field] = null;
        obj[field] = field;
    };
    return obj;
};

export default checkEmptyFields;