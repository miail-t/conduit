import React, { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { fetchRegistration } from '../../redux/userSlice'

import Input from '../../UI/Input';
import Form from '../../UI/Form';
import Button from '../../UI/Button';
import { RootState } from '../../rootReducer';


export default function Registration() {
    const dispatch = useDispatch();
    const { error, loading } = useSelector((state: RootState) => state.user);
    const [username, ChangeUserName] = useState('')
    const [email, ChangeEmail] = useState('')
    const [password, Changepassword] = useState('')

    const onSubmit = () => {
        dispatch(fetchRegistration({ username, email, password }))
    }

    return (
        <Form onSubmit={onSubmit}>
            Registration
            <Input label={'E-mail'} onChange={ChangeEmail} value={email} hasError={error.email} />
            <Input label={'Password'} onChange={Changepassword} value={password} hasError={error.password} />
            <Input label={'UserName'} onChange={ChangeUserName} value={username} hasError={error.username} />
            <Button type={"submit"} loading={loading} >Sign Up</Button>
        </Form>
    );
}
