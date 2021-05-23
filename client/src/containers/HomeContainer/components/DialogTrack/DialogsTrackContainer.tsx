import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

import DialogsTrack from './DialogsTrack';

import emptyIcon from '../../../../assets/images/empty.svg';


const DialogsTrackContainer : React.FC = () => {

    const dialogs = useSelector((state: RootState) => state.dialogs.dialogs);

    return dialogs.length ? (
        <DialogsTrack 
            dialogs={dialogs}
        />
    ) : (
        <img src={emptyIcon} alt="empty" />
    );
};

export default DialogsTrackContainer;