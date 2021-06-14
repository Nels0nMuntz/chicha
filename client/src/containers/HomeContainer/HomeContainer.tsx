import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '../../store';
import { Preloader } from '../../components';
import { HeaderSidebar, SearchField, DialogsTrackContainer, Message, SendForm } from './components';
import { getDialogsThunk } from './../../store/dialogs/thunks';

import style from './HomeContainer.module.scss';


const HomeContainer: React.FC = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const authStatus = useSelector((state: RootState) => state.auth.authStatus);
    const dialogsStatus = useSelector((state: RootState) => state.dialogs.status);
    const isLoading = authStatus === 'INITIAL' || authStatus === 'RUNNING';
    console.log(authStatus);
    

    React.useEffect(() => {
        if(authStatus === 'FAILD') history.push('/auth/signin');
    }, [authStatus, dispatch, history]);

    React.useEffect(() => {
        if(dialogsStatus === 'INITIAL') dispatch(getDialogsThunk());
    }, [dialogsStatus, dispatch])

    if (isLoading) return <Preloader />;

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
                        <DialogsTrackContainer />
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