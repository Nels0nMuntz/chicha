import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import FormTextField from '../../components/TextField/FormTextField';
import MainButton from './../../components/MainButton/MainButton';

import style from "./LoginForm.module.scss";
import TextField from '@material-ui/core/TextField';


const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => console.log(values)
    });

    const fieldHandleChange = (e: React.ChangeEvent<any>): void => {
        e.target.autofocus = true;
        console.log(e);        
        formik.handleChange(e)
    };

    return (
        <form
            className={style.loginForm}
            onSubmit={formik.handleSubmit}
        >
            <FormTextField
                id="login-input-email"
                name="email"
                type="text"
                label="E-mail"
                value={formik.values.email}
                onChange={fieldHandleChange}
            />
            {/* <FormTextField
                id="login-input-password"
                name="password"
                type="password"
                label="Пароль"
                value={formik.values.password}
                onChange={formik.handleChange}
            /> */}
            <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            <MainButton text="Зарегистрироваться" />
            <Link to="/signin" className="form-redirect-link">Войти в аккаунт</Link>
        </form>
    );
};

export default LoginForm;
