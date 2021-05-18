import React from 'react';
import classnames from 'classnames';

import Drawer from '@material-ui/core/Drawer';

import style from './HeaderSidebar.module.scss';


const HeaderSidebar: React.FC = () => {

    const [drowerState, setDrowerState] = React.useState(false);

    return (
        <div className={style.header_sidebar}>
            <div className={style.header_sidebarWrapper}>
                <div className={style.header_sidebarSuffix}>
                    <div
                        className={classnames(
                            style.burgerIcon,
                            drowerState && style.burgerIconOpen
                        )}
                        onClick={() => setDrowerState(!drowerState)}
                    >
                        <div></div>
                    </div>
                </div>
                <p className={style.header_sidebarTitle}>Список диалогов</p>
            </div>
            <Drawer
                anchor='top'
                open={drowerState}
                onClose={() => setDrowerState(false)}
            >
                <ul>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                </ul>
            </Drawer>
        </div>
    )
};

export default HeaderSidebar;