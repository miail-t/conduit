import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';
import Toast from '../Toast';

import style from './ToastWrap.module.scss';

const ToastWrap = () => {
    const notifications = useSelector((state: RootState) => state.notifications);
    const notificationsList = notifications.map(toast => { return <Toast {...toast} key={toast.id} /> })

    return <div className={style.toastWrap} >
        {notificationsList}
    </div>
}

export default ToastWrap;