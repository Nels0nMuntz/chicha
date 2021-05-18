import React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import GroupIcon from '@material-ui/icons/Group';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import SettingsIcon from '@material-ui/icons/Settings';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import InfoIcon from '@material-ui/icons/Info';

import style from './HeaderSidebar.module.scss';
import './style.scss'


const HeaderSidebar: React.FC = () => {

    const [drowerState, setDrowerState] = React.useState(false);

    const ref = React.useRef((e: any): void => {
        if (e.target === btnRef.current) return;
        setDrowerState(false);
    });

    const btnRef = React.useRef(null);

    const onClickBurger = () => {
        if (!drowerState) {
            setDrowerState(true);
            document.body.addEventListener('mousedown', ref.current);
        };
        if (drowerState) {
            setDrowerState(false);
            document.body.removeEventListener('mousedown', ref.current);
        };
    };

    return (
        <div className={style.header_sidebar}>
            <div className={style.header_sidebarWrapper}>
                <div className={style.header_sidebarSuffix}>
                    <div
                        className={classnames(
                            style.burgerIcon,
                            drowerState && style.burgerIconOpen
                        )}
                        onClick={onClickBurger}
                        ref={btnRef}
                    >
                        <div></div>
                    </div>
                </div>
                <p className={style.header_sidebarTitle}>Список диалогов</p>
            </div>
            <CSSTransition
                in={drowerState}
                timeout={300}
                unmountOnExit                
                classNames='burger-menu'
            >
                <ul className={style.burgerMenu}>
                    <li className={style.burgerMenuItem}>
                        <div className={style.itemIcon}><GroupIcon /></div>
                        <div className={style.itemText}>New group</div>
                    </li>
                    <li className={style.burgerMenuItem}>
                        <div className={style.itemIcon}><PermContactCalendarIcon /></div>
                        <div className={style.itemText}>Contacts</div>
                    </li>
                    <li className={style.burgerMenuItem}>
                        <div className={style.itemIcon}><SettingsIcon /></div>
                        <div className={style.itemText}>Settings</div>
                    </li>
                    <li className={style.burgerMenuItem}>
                        <div className={style.itemIcon}><LiveHelpIcon /></div>
                        <div className={style.itemText}>ChiCha FAQ</div>
                    </li>
                    <li className={style.burgerMenuItem}>
                        <div className={style.itemIcon}><InfoIcon /></div>
                        <div className={style.itemText}>About</div>
                    </li>
                </ul>
            </CSSTransition>
        </div>
    )
};

export default HeaderSidebar;