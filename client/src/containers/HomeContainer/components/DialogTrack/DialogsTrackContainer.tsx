import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

import DialogsTrack from './DialogsTrack';

import { EmptySection } from '../../../../components';


const DialogsTrackContainer : React.FC = () => {

    const dialogs = useSelector((state: RootState) => state.dialogs.dialogs);

    return dialogs.length ? (
        <DialogsTrack 
            dialogs={dialogs}
        />
    ) : (
        <EmptySection
            text='У Вас пока нет диалогов. Найдите собеседников, что бы начать общаться.'
        />
    );
};

export default DialogsTrackContainer;