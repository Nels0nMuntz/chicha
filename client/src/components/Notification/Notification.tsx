import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { switchNotificationAC } from '../../store/notification/actions'


const TransitionLeft = (props: TransitionProps) => {
    return <Slide {...props} direction="left" />;
};

const Notification: React.FC = () => {

    const dispatch = useDispatch();

    const isOpen = useSelector((state: RootState) => state.notification.isOpen);

    const onClose = () => { dispatch(switchNotificationAC(false)) };

    return (
        <Snackbar
            open={isOpen}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            TransitionComponent={TransitionLeft}
            autoHideDuration={4000}
            onClose={onClose}
        >
            <Alert severity="success">
                This is a success message!
            </Alert>
        </Snackbar>
    )
};

export default Notification;