import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store';
import { HomePage, Preloader } from './../../components';
import { updateAuthDataThunk } from './../../store/auth/thunks';


const Home: React.FC = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);

    React.useEffect(() => { if (!isAuth) dispatch(updateAuthDataThunk()) }, [isAuth, dispatch]);

    return isAuth ? <HomePage/> : <Preloader/>;
};

export default Home;