import React from "react";
import { useDispatch } from "react-redux";
import { deleteNotifications } from "../../redux/notificationsSlice";
import { Notification } from '../../type/type'
import cls from 'classnames'

import style from "./Toast.module.scss"
import IconButton from "../IconButton";
import { ReactComponent as Cross } from '../../assets/Cross.svg'

const ToastInner = ({ type, title, description, id }: Notification) => {
    const dispatch = useDispatch()

    const deleteToast = () => {
        dispatch(deleteNotifications(id))
    }

    const toastStyle = cls({
        [style.toast]: true,
        [style[type]]: !!type,
    })

    return <div className={toastStyle} >
        <div className={style.body} >
            <span className={style.title} >{title}</span>
            <p className={style.description} >{description}</p>
        </div>

        <IconButton className={style.closeIcon} onClick={deleteToast} > <Cross /> </IconButton>
    </div>
}

export const Toast = React.memo(ToastInner);