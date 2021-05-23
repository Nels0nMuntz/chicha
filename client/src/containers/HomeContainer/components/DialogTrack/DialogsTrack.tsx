import React from 'react';

import { Dialog } from '..';
import { IDialog } from '../../../../store/dialogs/types';

import style from './DialogsTrack.module.scss';


type DialogsTrackProps = {
    dialogs: Array<IDialog>
}

const DialogsTrack: React.FC<DialogsTrackProps> = ({ dialogs }) => {
    return (
        <div className={style.dialogs_track}>
            {dialogs.map(({ participant }, i) => (
                <Dialog
                    firstName={participant.firstName}
                    lastName={participant.lastName}
                    avatar={participant.avatar} 
                    key={i}
                />
            ))}
        </div>
    )
};

export default DialogsTrack;