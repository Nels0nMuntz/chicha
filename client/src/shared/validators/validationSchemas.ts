import * as Yup from 'yup';
import { Assign, ObjectShape } from 'yup/lib/object';
import { RequiredStringSchema } from 'yup/lib/string';

import { ISignInForm, ISignUpForm } from '../../features/auth/models';
import { regExpPatterns as patterns } from '../constants/regExpPatterns';


const messages = {
    empty: "Необходимо заполнить поле",
    email: {
        error: "Неверный формат E-mail",
    },
    password: {
        error: {
            wrongChar: "Пароль должен содержать заглавные и строчные символы латинского алфавита и цифры",
            minLenght: "Пароль должен состоять минимум из 8 символов",
            maxLenght: "Пароль должен состоять максимум из 20 символов",
        },
        notMatch: "Пароли не совпадают",
    },
    firstName: {
        error: "Неверный формат имени"
    },
    lastName: {
        error: "Неверный формат фамилии"
    },
    phoneNumber: {
        error: 'Неверный формат номера телефона'
    }
};

type  FormValidationSchemaShape<T> = {
    [P in keyof T]: RequiredStringSchema<string | undefined, Record<string, any>>
};

export interface FormValidationSchema<T> extends Yup.ObjectSchema<Assign<ObjectShape, FormValidationSchemaShape<T>>> {};

export const SignUpFormValidationSchema : FormValidationSchema<ISignUpForm> = Yup.object().shape({
    email: Yup
        .string()
        .matches(patterns.email, messages.email.error)
        .required(messages.empty),
    firstName: Yup
        .string()
        .matches(patterns.cyrillic, messages.firstName.error)
        .required(messages.empty),
    lastName: Yup
        .string()
        .matches(patterns.cyrillic, messages.lastName.error)
        .required(messages.empty),
    phoneNumber: Yup
        .string()
        .min(18, messages.phoneNumber.error)
        .required(messages.empty),
    password: Yup
        .string()
        .min(8, messages.password.error.minLenght)
        .max(20, messages.password.error.maxLenght)
        .matches(patterns.password, messages.password.error.wrongChar)
        .required(messages.empty),
    paswordConfirm: Yup
        .string()
        .oneOf([Yup.ref('password'), null], messages.password.notMatch)
        .required(messages.empty),
});

export const SignInFormValidationSchema : FormValidationSchema<ISignInForm> = Yup.object().shape({
    email: Yup
        .string()
        .matches(patterns.email, messages.email.error)
        .required(messages.empty),
    password: Yup
        .string()
        .min(8, messages.password.error.minLenght)
        .max(20, messages.password.error.maxLenght)
        .matches(patterns.password, messages.password.error.wrongChar)
        .required(messages.empty),
});

/*const validator = {
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

export default validator; */