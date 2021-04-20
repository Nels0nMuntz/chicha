import React from 'react';
import LoginForm from '../../../containers/LoginForm/LoginForm';

import style from "./StartPage.module.scss"

const StartPage = () => {
    return (
        <section className={style.wrapper}>
            <div className={style.content}>
                <h1 className={style.content_title}>Войти в аккаунт</h1>
                <p className={style.content_subtitle}>Пожалуйста, войдите в свой аккаунт</p>
                <div className={style.content_formWrapper}>
                    <LoginForm/>
                </div>
            </div>
        </section>
    )
};

export default StartPage;