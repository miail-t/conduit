import React, { useEffect, useState } from 'react';
import Form from '../../UI/Form';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import TextArea from '../../UI/TextArea'

import { RootState } from '../../rootReducer'
import { fetchEditUserInfo } from '../../redux/userSlice'

import './Setting.scss';
import { useDispatch, useSelector } from 'react-redux';

const SettingInner = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user)
    const [image, changeUrl] = useState<string>();
    const [username, changeUserName] = useState<string>();
    const [bio, changeBio] = useState<string>();
    const [email, changeEmail] = useState<string>();
    const [password, changePassword] = useState<string | undefined>(undefined);

    useEffect(() => {
        changeUrl(user.user.image)
        changeUserName(user.user.username)
        changeBio(user.user.bio)
        changeEmail(user.user.email)
    }, [user])

    const onSubmit = () => {
        const user = { email, username, image, bio, password }

        if (password === '') {
            delete user.password
        }
        try {
            dispatch(fetchEditUserInfo(user))
            alert()
        } catch(e) {
            console.log(e)
        }

    }

    return (
        <Form onSubmit={onSubmit} >
            <h1>Setting</h1>
            <Input label={'URL of profile picture'} onChange={changeUrl} value={image} />
            <Input label={'Username'} onChange={changeUserName} value={username} />
            <TextArea onChange={changeBio} value={bio} />
            <Input label={'E-mail'} onChange={changeEmail} value={email} />
            <Input label={'New password'} onChange={changePassword} />
            <Button type={'submit'} loading={user.loading} >Update profile</Button>
        </Form>
    )
}

export const Setting = React.memo(SettingInner);
