import React, { useState } from 'react';

import { useDispatch } from "react-redux";
import { fetchRegistration } from '../../redux/userSlice'

import Input from '../../UI/Input';
import Form from '../../UI/Form';
import Button from '../../UI/Button';


export default function Registration() {
    const dispatch = useDispatch();
    const [username, ChangeUserName] = useState('')
    const [email, ChangeEmail] = useState('')
    const [password, Changepassword] = useState('')

    const onSubmit = () => {
        const user = { username, email, password }
        dispatch(fetchRegistration(user))
    }

    return (
        <Form onSubmit={onSubmit}>
            Login
            <Input label={'UserName'} onChange={ChangeUserName} value={username} />
            <Input label={'E-mail'} onChange={ChangeEmail} value={email} />
            <Input label={'Password'} onChange={Changepassword} value={password} />
            <Button type={"submit"} >Click</Button>
        </Form>
    );
}
