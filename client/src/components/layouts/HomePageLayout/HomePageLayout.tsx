import React from 'react';

import SearchInput from '../../SearchInput/SearchInput';
import Dialog from '../../Dialog/Dialog';
import Message from '../../Message/Message';
import SendForm from '../../SendForm/SendForm';
import HeaderSidebar from './../../HeaderSidebar/HeaderSidebar';

import style from "./HomePageLayout.module.scss";


const HomePageLayout: React.FC = () => {
    return (
        <div className={style.home_wrapper}>
            <div className="container">
                <div className={style.home_grid}>
                    <header className={style.header}>
                        <HeaderSidebar/>
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
                                <SendForm />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
};

export default HomePageLayout;