import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../rootReducer';
import { fetchRegistration } from '../../redux/userSlice'

import Input from '../../UI/Input';
import Form from '../../UI/Form';
import Button from '../../UI/Button';

export default function Registration() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user, error, loading } = useSelector((state: RootState) => state.user);
    const [username, ChangeUserName] = useState('')
    const [email, ChangeEmail] = useState('')
    const [password, Changepassword] = useState('')

    useEffect(() => {
        if (user.token) {
            history.push('/');
        }
    })

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
