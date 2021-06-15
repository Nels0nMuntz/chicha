import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '../../store';
import { Preloader } from '../../components';
import { HeaderSidebar, SearchField, DialogsTrackContainer, Message, SendForm } from './components';

import style from './HomeContainer.module.scss';
import { getDialogsThunk } from './../../store/dialogs/thunks';


const HomeContainer: React.FC = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const signinStatus = useSelector((state: RootState) => state.auth.signinStatus);
    const isLoading = signinStatus === 'INITIAL' || signinStatus === 'RUNNING';

    React.useEffect(() => {
        switch (signinStatus) {
            case 'FAILD':
                history.push('/auth/signin');
                break;
            // case 'INITIAL':

            // case Status.UNKNOWN:
            //     dispatch(setIsLoadingAC(true));
            //     dispatch(updateAuthDataThunk());
            //     break;
            // case Status.SUCCESS:
            //     dispatch(getDialogsThunk())
            //     break;
            default:
                break;
        }
    }, [signinStatus, dispatch, history]);

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