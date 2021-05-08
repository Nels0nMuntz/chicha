import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '../../store';
import { Status } from '../../types/types';
import { HomePage, Preloader } from './../../components';
import { updateAuthDataThunk } from './../../store/auth/thunks';


const Home: React.FC = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const signinStatus = useSelector((state: RootState) => state.auth.signinStatus);
    const isAuthSuccess = signinStatus === Status.SUCCESS ? true : false;
    const isAuthFaild = signinStatus === Status.FAILD ? true : false;

    React.useEffect(() => { 
        if (isAuthFaild) {
            history.push('/auth/signin');
        }else if (!isAuthSuccess) {
            dispatch(updateAuthDataThunk());
        }
    }, [isAuthSuccess, isAuthFaild, dispatch, history]);

    return isAuthSuccess ? <HomePage/> : <Preloader/>;
};

export default Home;