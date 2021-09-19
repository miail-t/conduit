import React from 'react';

import style from './Toast.module.scss'

interface ToastProps {
    title?: string;
    message: string;
    IconComponent?: React.ReactNode;
}

function Toast({title, message}: ToastProps) {
    return (
        <div>
            {title + " " + message}
        </div>
    );
}

export default Toast;
