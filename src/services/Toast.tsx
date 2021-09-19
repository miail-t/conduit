import React from 'react';
import {toast, ToastOptions, Bounce} from 'react-toastify';
import Message from '../UI/Toast'
/*import { CircleButton, Toast as Message } from 'UI';
import { CloseEx, Error, Info, Success, Warn } from 'assets/svg';
import { ButtonClose } from 'UI/Toast/styled';
import { colors } from 'styled';*/

/*const ButtonCircleClose = () => {
    return (
        <ButtonClose>
            <CircleButton color={colors.secondaryPink} size={24}>
        <CloseEx />
        </CircleButton>
        </ButtonClose>
);
};*/

const toastOptions: ToastOptions = {
    position: 'bottom-right',
    //autoClose: 1500,
    hideProgressBar: true,
    pauseOnHover: true,
    draggable: true,
    transition: Bounce,
    //closeButton: ButtonCircleClose,
};

const getToast = (type: string, message: string, title?: string) => {
    switch (type) {
        case 'success':
            return (
                <Message title={title} message={message}/>
            );
        case 'info':
            return (
                <Message title={title} message={message}/>
            );
        case 'error':
            return (
                <Message title={title} message={message}/>
            );
        case 'warn':
            return (
                <Message title={title} message={message}/>
            );

        default:
    }
};

class ToastService {
    success = (message: string, title?: string) =>
        toast.success(getToast('success', message, title), toastOptions);

    info = (message: string, title?: string) =>
        toast.info(getToast('info', message), toastOptions);

    error = (message = 'Something went wrong', title = 'Error') =>
        toast.error(getToast('error', message, title), toastOptions);

    warn = (message: string, title?: string) =>
        toast.warn(getToast('info', message, title), toastOptions);
}

export default new ToastService();
