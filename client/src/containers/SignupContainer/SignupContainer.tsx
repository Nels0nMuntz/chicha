import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SignupForm, StartPageLayout } from '../../components';
import { RootState } from '../../store';
import { signupThunk } from '../../store/auth/thunks';
import { ISignupData } from '../../store/auth/types';


const SignupContainer: React.FC = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const signupStatus = useSelector((state: RootState) => state.auth.signupStatus);

    const onSubmit = (values: ISignupData) => {
        const normalized = normalizeSignupData(values);
        dispatch(signupThunk(normalized));
    };

    React.useEffect(() => {
        if(signupStatus === 'SUCCESS') history.push('/auth/signin');
    }, [signupStatus, history]);

    return (
        <StartPageLayout
            title="Регистрация"
            subtitle="Для входа в чат, вам нужно зарегистрироваться"
        >
            <SignupForm
                onSubmitForm={onSubmit}
            />
        </StartPageLayout>
    );
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