import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { fetchLogin } from '../../redux/userSlice'

import Input from '../../UI/Input';
import Form from '../../UI/Form';
import Button from '../../UI/Button';

import './Login.scss';

export default function Login() {
    const dispatch = useDispatch();
    const [email, emailHandle] = useState('')
    const [password, passwordHandle] = useState('')

    console.log({
        user: "Miail16",
        mail: "miail@gmail.com",
        pass: "Misterfox16"
    })

    const onSubmit = () => {
        dispatch(fetchLogin({ email, password }))
    }

    return (
        <Form onSubmit={onSubmit} >
            Login miail@gmail.com
            <Input label={'E-mail'} onChange={emailHandle} value={email} />
            <Input label={'Password'} onChange={passwordHandle} value={password} />
            <Button>Click</Button>
        </Form>
    );
}
