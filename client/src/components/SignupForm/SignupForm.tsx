import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import FormTextField from '../TextField/FormTextField';
import MainButton from '../MainButton/MainButton';
import { validator } from '../../shared/helpers';

const validate = validator.signup;

const SignupForm : React.FC = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            passwordRepeat: '',
        },
        validate,
        onSubmit: values => console.log(values)        
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormTextField
                id="register-email"
                type="text"
                label="E-mail"
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : " "}
                isTouched={formik.touched.email ? true : false}
                isValid={formik.errors.email ? false : true}
                {...formik.getFieldProps("email")}
            />
            <FormTextField
                id="register-firstName"
                type="text"
                label="Ваше имя"
                helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : " "}
                isTouched={formik.touched.firstName ? true : false}
                isValid={formik.errors.firstName ? false : true}
                {...formik.getFieldProps("firstName")}
            />
            <FormTextField
                id="register-lastName"
                type="text"
                label="Ваша фамилия"
                helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : " "}
                isTouched={formik.touched.lastName ? true : false}
                isValid={formik.errors.lastName ? false : true}
                {...formik.getFieldProps("lastName")}
            />
            <FormTextField
                id="register-password"
                type="password"
                label="Пароль"
                helperText={formik.touched.password && formik.errors.password ? formik.errors.password : " "}
                isTouched={formik.touched.password ? true : false}
                isValid={formik.errors.password ? false : true}
                {...formik.getFieldProps("password")}
            />
            <FormTextField
                id="register-passwordRepeat"
                type="password"
                label="Повторите пароль"
                helperText={formik.touched.passwordRepeat && formik.errors.passwordRepeat ? formik.errors.passwordRepeat : " "}
                isTouched={formik.touched.passwordRepeat ? true : false}
                isValid={formik.errors.passwordRepeat ? false : true}
                {...formik.getFieldProps("passwordRepeat")}
            />
            <MainButton 
                type="submit"
                text="Зарегистрироваться" 
            />
            <Link 
                to="/signin" 
                className="form-redirect-link"
            >
                Войти в аккаунт
            </Link>
        </form>
    )
};

export default SignupForm;