import React from 'react';
import cls from 'classnames'
import style from './IconButton.module.scss'

type IconButtonProps = {
    customClass?: string,
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const IconButtonInner = ({ customClass, ...restProps }: IconButtonProps) => {
    const styleBetton = cls({
        [style.iconButton]: true,
        [`${customClass}`]: customClass
    })

    return <button className={styleBetton} {...restProps} ></button>
}

export const IconButton = React.memo(IconButtonInner);