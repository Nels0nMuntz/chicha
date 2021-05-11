import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { RootState } from '../../store';
import { switchNotificationAC } from '../../store/notification/actions'
import { Status } from '../../types/types';


const TransitionLeft = (props: TransitionProps) => {
    return <Slide {...props} direction="left" />;
};

const Notification: React.FC = () => {

    const dispatch = useDispatch();

    const config = useSelector(createSelector(
        [
            (state: RootState) => state.notification.status,
            (state: RootState) => state.notification.message,
            (state: RootState) => state.notification.isOpen,
        ],
        (status, message, isOpen) => ({ status, message, isOpen })
    ));

    const alertStatus = config.status === Status.SUCCESS ? 'success' : config.status === Status.FAILD ? 'error' : 'info';

    const onClose = () => { dispatch(switchNotificationAC(false)) };

    return (
        <Snackbar
            open={config.isOpen}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            TransitionComponent={TransitionLeft}
            autoHideDuration={5000}
            onClose={onClose}
        >
            <Alert
                severity={alertStatus}
            >
                {config.message}
            </Alert>
        </Snackbar>
    )
};

export default Notification;