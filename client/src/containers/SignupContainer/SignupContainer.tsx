import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SignupForm, StartPageLayout } from '../../components';
import { RootState } from '../../store';
import { sendAuthDataThunk } from '../../store/auth/thunks';
import { ISignupData } from '../../store/auth/types';
import { Status } from '../../types/types';


const SignupContainer: React.FC = () => {

    const dispatch = useDispatch();
    const signupStatus = useSelector((state: RootState) => state.auth.signupStatus);
    const isAuthUnknown = signupStatus === Status.UNKNOWN;

    const onSubmit = (values: ISignupData) => {
        const normalized = normalizeSignupData(values);
        dispatch(sendAuthDataThunk(normalized));
    };

    return (
        <StartPageLayout
            title="Регистрация"
            subtitle="Для входа в чат, вам нужно зарегистрироваться"
        >
            <SignupForm
                isAuthUnknown={isAuthUnknown}
                onSubmitForm={onSubmit}
            />
        </StartPageLayout>
    )
};

const normalizeSignupData = (fields: ISignupData) => {
    const obj : ISignupData = { ...fields }
    for(let key of Object.keys(fields)){
        if(key === 'lastName' && !fields[key]){
            obj[key] = null;
        }
        if(key === 'phoneNumber'){
            obj[key] = obj[key].replace(/[^+\d]/g, '');
        }
    };
    return obj;
};

export default SignupContainer;