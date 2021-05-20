import React from 'react';

import { Dialog } from '../../components';

import style from './DialogTrack.module.scss';


const DialogTrack: React.FC = () => {
    return (
        <div className={style.dialogs_track}>
            <Dialog />
            <Dialog />
            <Dialog />
            <Dialog />
        </div>
    )
};

export default DialogTrack;