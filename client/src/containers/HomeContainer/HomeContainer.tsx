import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '../../store';
import { Status } from '../../types/types';
import { Preloader } from '../../components';
import { updateAuthDataThunk } from '../../store/auth/thunks';
import { HeaderSidebar, SearchField, DialogsTrackContainer, Message, SendForm } from './components';
import { setIsLoading } from './../../store/loading/actions';

import style from './HomeContainer.module.scss';
import { initAppThunk } from '../../store/initApp/thunks';


const HomeContainer: React.FC = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const isLoading = useSelector((state: RootState) => state.loading.isloading);
    const signinStatus = useSelector((state: RootState) => state.auth.signinStatus);
    const isAuthorized = signinStatus === Status.SUCCESS;

    React.useEffect(() => {
        switch (signinStatus) {
            case Status.FAILD:
                history.push('/auth/signin');
                break;
            case Status.UNKNOWN:
                dispatch(setIsLoading(true));
                dispatch(updateAuthDataThunk());
                break;
            case Status.SUCCESS:
                dispatch(initAppThunk());       
                break;
            default:
                break;
        }
    }, [signinStatus, dispatch, history]);

    if (!isAuthorized || isLoading) return <Preloader />;

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