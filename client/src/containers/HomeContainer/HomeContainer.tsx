import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '../../store';
import { Status } from '../../types/types';
import { Preloader } from '../../components';
import { updateAuthDataThunk } from '../../store/auth/thunks';
import { HeaderSidebar, SearchField, DialogTrack, Message, SendForm } from './components';

import style from './HomeContainer.module.scss';
import { setIsLoading } from './../../store/loading/actions';
import { getDialogsThunk } from './../../store/dialogs/thunks';


const HomeContainer: React.FC = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const isLoading = useSelector((state: RootState) => state.loading.isloading);
    const signinStatus = useSelector((state: RootState) => state.auth.signinStatus);
    const isAuthSuccess = signinStatus === Status.SUCCESS ? true : false;
    const isAuthFaild = signinStatus === Status.FAILD ? true : false;

    React.useEffect(() => {
        if (isAuthFaild) {
            history.push('/auth/signin');
        } else if (!isAuthSuccess) {
            dispatch(setIsLoading(true));
            dispatch(updateAuthDataThunk());
        } else if (isAuthSuccess){
            dispatch(getDialogsThunk());
            dispatch(setIsLoading(false));
        }
    }, [isAuthSuccess, isAuthFaild, dispatch, history]);

    if (!isAuthSuccess || isLoading) return <Preloader />;

    return (
        <div className={style.home_wrapper}>
            <div className="container">
                <div className={style.home_grid}>
                    <header className={style.header}>
                        <HeaderSidebar />
                        <div className={style.header_main}>
                            <div className={style.user_info}>
                                <p className={style.user_fullname}>Гай Юлий Цезарь</p>
                                <p className={style.user_status}>онлайн</p>
                            </div>
                            <div className={style.filter_btn}>
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </header>
                    <aside className={style.home_dialogs}>
                        <div className={style.dialogs_searchWrapper}>
                            <SearchField />
                        </div>
                        <DialogTrack/>
                    </aside>
                    <main className={style.home_main}>
                        <div className={style.massages_track}>
                            <Message />
                        </div>
                        <div className={style.massages_sendWrapper}>
                            <div className={style.send_panel}>
                                <SendForm />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
};

export default HomeContainer;