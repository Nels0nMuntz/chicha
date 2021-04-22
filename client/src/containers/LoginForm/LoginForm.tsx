import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import FormTextField from '../../components/TextField/FormTextField';
import MainButton from './../../components/MainButton/MainButton';

import { validate } from "../../shared/helpers"

import style from "./LoginForm.module.scss";


export interface ILoginFormFields {
    email: string
    password: string
}
export interface ILoginFormErrors {
    email?: string
    password?: string
}

const LoginForm : React.FC = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => console.log(values)
    });        

    return (
        <form
            className={style.loginForm}
            onSubmit={formik.handleSubmit}
        >
            <FormTextField
                id="login-input-email"
                type="text"
                label="E-mail"
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : " "}
                isTouched={formik.touched.email ? true : false}
                isValid={formik.errors.email ? false : true}
                {...formik.getFieldProps("email")}
            />
            <FormTextField
                id="login-input-password"
                type="password"
                label="Пароль"
                helperText={formik.touched.password && formik.errors.password ? formik.errors.password : " "}
                isTouched={formik.touched.password ? true : false}
                isValid={formik.errors.password ? false : true}
                {...formik.getFieldProps("password")}
            />
            <MainButton 
                type="submit"
                text="Зарегистрироваться" 
            />
            <Link to="/signin" className="form-redirect-link">Войти в аккаунт</Link>
        </form>
    );
};

export default LoginForm;
