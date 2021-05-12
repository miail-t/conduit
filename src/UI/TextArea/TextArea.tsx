import React from 'react';
import cls from "classnames";

import style from './TextArea.module.scss';

interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
    onChange?: ((value: string) => void);
    customClass?: string;
    hasError?: string
}

const TextAreaInner = ({ onChange, customClass, hasError, ...restProps }: TextAreaProps) => {
    const handleChange = (event?: React.ChangeEvent<any>) => {
        const { value } = event?.target
        if (onChange) {
            console.log(value)
            onChange(value);
        }
    }

    const styleTextArea = cls(
        { [style.textArea]: true },
        { [`${customClass}`]: customClass },
        { error: hasError }
    )
    return (
        <div className={styleTextArea} >
            <textarea className={style.area} onChange={handleChange} {...restProps} />
            <span className='textError'>{hasError}</span>
        </div>
    )
}

export const TextArea = React.memo(TextAreaInner);