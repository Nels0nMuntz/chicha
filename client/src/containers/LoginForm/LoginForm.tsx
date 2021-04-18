import React from 'react'

import TextField from '../../components/TextField/TextField';

import style from "./LoginForm.module.scss";


const LoginForm = () => {
    return (
        <div className={style.loginForm}>
            <TextField/>
        </div>
    )
}

export default LoginForm
