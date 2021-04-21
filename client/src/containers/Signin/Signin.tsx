import React from 'react';
import { SigninForm, StartPage } from '../../components';

const Signin : React.FC = () => {
    return (
        <StartPage
            title="Войти в аккаунт"
            subtitle="Пожалуйста, войдите в свой аккаунт"
        >
            <SigninForm/>
        </StartPage>
    )
};

export default Signin;