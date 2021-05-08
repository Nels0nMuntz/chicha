import { ISigninData, ISignupData } from '../../store/auth/types';

interface ISigninFormErrors {
    email?: string
    password?: string
};
interface ISignupFormErrors {
    email?: string,
    firstName?: string,
    lastName?: string,
    phoneNumber?: string,
    password?: string,
    passwordRepeat?: string,
};

const patterns = {
    cyrillic: /^([A-Z][a-z\-']{1,50})|([А-ЯЁIЇҐЄ][а-яёіїґє\-']{1,50})$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{8,20}$/,
    email: /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
};

const messages = {
    empty: "Необходимо заполнить поле",
    email: {
        error: "Неверный формат E-mail",
    },
    password: {
        error: {
            wrongChar: "Пароль должен содержать заглавные и строчные символы латинского алфавита и цифры",
            wrongLenght: "Пароль должен состоять из 8-20 символов"
        },
        notMatch: "Пароли не совпадают",
    },
    name: {
        error: "Неверный формат"
    },
    phoneNumber: {
        error: 'Неверный формат номера телефона'
    }
};

const validator = {
    signin: (values: ISigninData): ISigninFormErrors => {

        const errors: ISigninFormErrors = {};

        if (!values.email) {
            errors.email = messages.empty;
        } else if (!patterns.email.test(values.email)) {
            errors.email = messages.email.error;
        };

        if (!values.password) {
            errors.password = messages.empty;
        } else if (values.password.length < 8 || values.password.length > 20) {
            errors.password = messages.password.error.wrongLenght;
        } else if (!patterns.password.test(values.password)) {
            errors.password = messages.password.error.wrongChar
        };

        return errors;
    },
    signup: (values: ISignupData): ISignupFormErrors => {

        const errors: ISignupFormErrors = {};

        if (!values.email) {
            errors.email = messages.empty;
        } else if (!patterns.email.test(values.email)) {
            errors.email = messages.email.error;
        };

        if (!values.firstName) {
            errors.firstName = messages.empty;
        } else if (!patterns.cyrillic.test(values.firstName)) {
            errors.firstName = messages.name.error;
        };

        if (values.lastName && !patterns.cyrillic.test(values.lastName)) {
            errors.lastName = messages.name.error;
        };

        if (!values.phoneNumber) {
            errors.phoneNumber = messages.empty;
        }else if(values.phoneNumber.length < 18){
            errors.phoneNumber = messages.phoneNumber.error
        }

        if (!values.password) {
            errors.password = messages.empty;
        } else if (values.password.length < 8 || values.password.length > 20) {
            errors.password = messages.password.error.wrongLenght;
        } else if (!patterns.password.test(values.password)) {
            errors.password = messages.password.error.wrongChar
        };

        if (!values.passwordRepeat) {
            errors.passwordRepeat = messages.empty;
        }else if(!values.password || errors.password || values.password !== values.passwordRepeat){
            errors.passwordRepeat = messages.password.notMatch;
        };

        return errors;
    },
};

export default validator;