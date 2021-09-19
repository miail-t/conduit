import React, { useState, useRef, useEffect } from 'react'
import cls from "classnames";
import './Input.scss';

interface inputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (value: string) => void;
    onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;
    label?: string
    value?: string
    hasError?: string
}


const InputInner = ({ value, onFocus, onBlur, onChange, onClick, label, defaultValue, hasError, ...restProps }: inputProps) => {
    const [focus, on] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        defaultValue ? on(true) : on(false)
    }, [defaultValue])


    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        getFocus()

        if (onFocus) {
            onFocus()
        }
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        getBlur()

        if (onBlur) {
            onBlur(event)
        }
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target

        if (onChange) {
            onChange(value)
        }
    }

    const getFocus = () => {
        inputRef.current?.focus();
        on(true)
    }

    const getBlur = () => {
        inputRef.current?.blur();
        on(false)
    }

    const styleInput = cls({
        inputWrap: true,
        focused: focus,
        value: value,
        error: hasError,
    })

    return (
        <div className={styleInput}>
            <label>
                <span className='label'>{label}</span>
                <input
                    value={value}
                    className={'input'}
                    ref={inputRef}
                    defaultValue={defaultValue}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onClick={onClick}
                    onChange={handleOnChange}
                    {...restProps}
                />
            </label>
            <span className='textError'>{hasError}</span>
        </div>
    )
}

export const Input = React.memo(InputInner)