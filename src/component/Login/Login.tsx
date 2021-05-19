import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from '../../redux/userSlice'
import { RootState } from '../../rootReducer';
import Input from '../../UI/Input';
import Form from '../../UI/Form';
import Button from '../../UI/Button';

import './Login.scss';



const Login = () => {
    const dispatch = useDispatch();
    const { error, loading } = useSelector((state: RootState) => state.user);
    const [email, emailHandle] = useState('');
    const [password, passwordHandle] = useState('');

    const onSubmit = () => {
        dispatch(fetchLogin({ email, password }));
    }

    return (
        <Form onSubmit={onSubmit} >
            Login miail@gmail.com
            <Input label={'E-mail'} onChange={emailHandle} value={email} hasError={error.login} />
            <Input label={'Password'} onChange={passwordHandle} value={password} />
            <Button loading={loading} >Login</Button>
        </Form>
    );
}
export default Login;
