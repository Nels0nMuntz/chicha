import { ILoginFormFields, ILoginFormErrors } from "../../containers/LoginForm/LoginForm"

const patterns = {
    cyrillic: /^([A-Z][a-z\-']{1,50})|([А-ЯЁIЇҐЄ][а-яёіїґє\-']{1,50})$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{8,20}$/,
    email: /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
};

const messages = {
    email: {
        empty: "Необходимо заполнить поле",
        error: "Неверный формат E-mail",
    },
    password: {
        empty: "Необходимо заполнить поле",
        error: {
            wrongChar: "Пароль должен содержать заглавные и строчные символы латинского алфавита и цифры",
            wrongLenght: "Пароль должен состоять из 8-20 символов"
        },
    }
}

const validate = (values: ILoginFormFields): ILoginFormErrors => {

    const errors : ILoginFormErrors = {};

    if(!values.email){
        errors.email = messages.email.empty;
    }else if(!patterns.email.test(values.email)){
        errors.email = messages.email.error;
    };

    if(!values.password){
        errors.password = messages.password.empty;
    }else if(values.password.length < 8 || values.password.length > 20){
        errors.password = messages.password.error.wrongLenght;
    }else if(!patterns.password.test(values.password)){
        errors.password = messages.password.error.wrongChar
    };

    return errors;
};

export default validate;