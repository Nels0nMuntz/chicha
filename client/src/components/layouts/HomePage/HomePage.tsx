import React from 'react';

import SearchInput from '../../SearchInput/SearchInput';
import Dialog from '../../Dialog/Dialog';
import Message from '../../Message/Message';
import SendForm from '../../SendForm/SendForm';
import withLoading from './../../HOC/withLoading';

import style from "./HomePage.module.scss";
import EditIcon from '@material-ui/icons/Edit';
import userImg from "../../../assets/images/user.svg";


const HomePage: React.FC = () => {
    return (
        <div className={style.home_wrapper}>
            <div className="container">
                <div className={style.home_grid}>
                    <header className={style.header}>
                        <div className={style.header_sidebar}>
                            <div className={style.header_sidebarWrapper}>
                                <div className={style.header_sidebarSuffix}>
                                    <img src={userImg} alt="user" />
                                </div>
                                <p className={style.header_sidebarTitle}>Список диалогов</p>
                                <div className={style.header_sidebarPrefix}>
                                    <EditIcon fontSize="small" />
                                </div>
                            </div>
                        </div>
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
                            <SearchInput />
                        </div>
                        <div className={style.dialogs_track}>
                            <Dialog />
                            <Dialog />
                            <Dialog />
                            <Dialog />
                        </div>
                    </aside>
                    <main className={style.home_main}>
                        <div className={style.massages_track}>
                            <Message />
                        </div>
                        <div className={style.massages_sendWrapper}>
                            <div className={style.send_panel}>
                                <SendForm/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
};

export default HomePage;