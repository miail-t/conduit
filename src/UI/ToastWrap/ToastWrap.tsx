import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';
import Toast from '../Toast';


const ToastWrap = () => {
    const qwerty = useSelector((state: RootState) => state.notifications);

    useEffect(() => {
        console.log(qwerty)
    }, [])

    const newQwerty = qwerty.map(toast => { return <Toast key={toast.id} type={toast.type} title={toast.title} description={toast.description} id={toast.id} /> })

    return <>{newQwerty}</>
}

export default ToastWrap