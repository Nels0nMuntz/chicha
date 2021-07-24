// vendor
import React from 'react';
// internal
import { SignUpContainer } from '../containers';
import { AuthLayout } from '../components';


const SignUpPage : React.FC = () => {
    return (
        <AuthLayout
            title="Регистрация"
            subtitle="Для входа в чат, вам нужно зарегистрироваться"
        >
            <SignUpContainer/>
        </AuthLayout>
    )
};

export default SignUpPage;