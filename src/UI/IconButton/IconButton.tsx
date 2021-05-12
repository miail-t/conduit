import React from 'react';

import style from './IconButton.module.scss'

type IconButtonProps = {

} & React.ButtonHTMLAttributes<HTMLButtonElement>

const IconButtonInner = ({ ...restProps }: IconButtonProps) => {
    return <button className={style.iconButton} {...restProps} ></button>
}

export const IconButton = React.memo(IconButtonInner);