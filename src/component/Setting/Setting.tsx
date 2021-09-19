import React, {useEffect, useState} from 'react';
import Form from '../../UI/Form';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import TextArea from '../../UI/TextArea'

import {RootState} from '../../rootReducer'
import {fetchEditUserInfo} from '../../redux/userSlice'
import {useDispatch, useSelector} from 'react-redux';

import './Setting.scss';
import {UserInfo} from "../../redux/storeType";

const SettingInner = () => {
    const dispatch = useDispatch();
    const {user, error, loading} = useSelector((state: RootState) => state.user)

    const [image, changeUrl] = useState<string>('');
    const [username, changeUserName] = useState<string>('');
    const [bio, changeBio] = useState<string>('');
    const [email, changeEmail] = useState<string>('');
    const [password, changePassword] = useState<string>('');


    useEffect(() => {
        changeUrl(user.image)
        changeUserName(user.username)
        changeBio(user.bio)
        changeEmail(user.email)
    }, [user])

    const onSubmit = () => {
        const user: UserInfo = {email, username, image, bio, password}

        if (!password) {
            delete user.password;
        }
        dispatch(fetchEditUserInfo(user));
    }

    return (
        <Form onSubmit={onSubmit}>
            <h1>Setting</h1>
            <Input label={'URL of profile picture'} onChange={changeUrl} value={image}/>
            <Input label={'Username'} onChange={changeUserName} value={username} hasError={error.username}/>
            <TextArea onChange={changeBio} value={bio}/>
            <Input type={'email'} label={'E-mail'} onChange={changeEmail} value={email} hasError={error.email}/>
            <Input type={'password'} label={'New password'} value={password} onChange={changePassword}
                   hasError={error.password}/>
            <Button type={'submit'} loading={loading}>Update profile</Button>
        </Form>
    )
}

export const Setting = React.memo(SettingInner);
