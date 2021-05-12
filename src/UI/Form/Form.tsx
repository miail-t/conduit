import React from 'react'
import cls from "classnames";
import './Form.scss'

type FormProps = {
    customClass?: string,
} & React.FormHTMLAttributes<HTMLFormElement>

const FormInner = ({ children, customClass, onSubmit }: FormProps) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (onSubmit) {
            onSubmit(event);
        }
    }

    const styleForm = cls({
        form: true,
        [`${customClass}`]: customClass
    })

    return (
        <form className={styleForm} onSubmit={handleSubmit} >
            {children}
        </form>
    )

}

export const Form = React.memo(FormInner)