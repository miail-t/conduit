import React from "react";
import { useDispatch } from "react-redux";
import { deleteNotifications } from "../../redux/notificationsSlice";
import { Notification } from '../../type/type'
import cls from 'classnames'

import style from "./Toast.module.scss"

const ToastInner = ({ type, title, body, id }: Notification) => {
    const dispatch = useDispatch()

    const deleteToast = () => {
        dispatch(deleteNotifications(id))
    }

    /* const toastStyle = cls({
    
    })    */ 

    return <div className={style.body} >
        {type + ' ' +
            body}

        <span onClick={deleteToast} >close</span>
    </div>
}

export const Toast = React.memo(ToastInner);