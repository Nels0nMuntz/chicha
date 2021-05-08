import React from 'react';
import { useDispatch } from 'react-redux';

import { SignupForm, StartPage } from '../../components';
import { checkEmptyFields } from '../../shared/helpers';
import { sendAuthDataThunk } from '../../store/auth/thunks';
import { ISignupData } from '../../store/auth/types';

const Signup : React.FC = () => {

    const dispatch = useDispatch();

    const onSubmit = (values: ISignupData) => {
        const checked = checkEmptyFields(values)
        // dispatch(sendAuthDataThunk(checked as ISignupData))
    };    

    return (
        <StartPage
            title="Регистрация"
            subtitle="Для входа в чат, вам нужно зарегистрироваться"
        >
            <SignupForm onSubmitForm={onSubmit} />
        </StartPage>
    )
};

export default Signup;