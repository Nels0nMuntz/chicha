import { ISignupData } from "../../store/auth/types";

const checkEmptyFields = (fields: ISignupData) => {
    const obj : ISignupData = { ...fields }
    for(let key of Object.keys(fields)){
        if(key === 'lastName' && !fields[key]){
            obj[key] = null;
        }
    };
    return obj;
};

export default checkEmptyFields;