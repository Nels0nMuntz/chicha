import React from 'react';
import { SignupForm, StartPage } from '../../components';

const Signup : React.FC = () => {
    return (
        <StartPage
            title="Регистрация"
            subtitle="Для входа в чат, вам нужно зарегистрироваться"
        >
            <SignupForm/>
        </StartPage>
    )
};

export default Signup;