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
            {dialogs.map(({ id, member, messages }, i) => (
                <Dialog
                    firstName={member.firstName}
                    lastName={member.lastName}
                    avatar={member.avatar} 
                    lastMessage={messages[0]?.text || null}
                    key={i}
                />
            ))}
        </div>
    )
};

export default DialogsTrack;