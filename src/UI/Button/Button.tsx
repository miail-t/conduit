import React from 'react';
import Spinner from '../Spinner';
import cls from 'classnames';
import style from './Button.module.scss';

type ButtonProps = {
    loading?: boolean,
    theme?: 'primary' | 'secondary',
    customClass?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

/* enum Theme {
    Primary = 'primary',
    Secondary = 'secondary'
} */

const ButtonInner = ({ loading, theme, children, disabled, customClass, ...restProps }: ButtonProps) => {

    const buttonStyle = cls({ [style.button]: true }, { [style.theme]: theme }, { [`${customClass}`]: customClass })

    return (
        <button className={buttonStyle} {...restProps} disabled={loading || disabled} >{loading ? <Spinner customClass={style.loading} /> : children}</button>
    )
}

export const Button = React.memo(ButtonInner);
