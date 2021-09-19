import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';
import Button from '../../UI/Button';
import { followUser, unfollowUser } from '../../utils/api';
import Toast from "../../services/Toast";

import style from './FollowButton.module.scss'

type Props = {
    username: string,
    follow: boolean
}

const FollowButtonInner = ({ username, follow }: Props) => {
    const loginUserName = useSelector((store: RootState) => store.user.user.username);
    const [followStatus, changeFollowStatus] = useState<boolean>(follow);

    const followHandler = async () => {
        try {
            const { data } = await followUser(username);
            changeFollowStatus(data.profile.following);
        } catch (e) {
            Toast.error();
        }
    }

    const unfollowHandler = async () => {
        try {
            const { data } = await unfollowUser(username);
            changeFollowStatus(data.profile.following);
        } catch (e) {
            Toast.error();
        }
    }

    return <>
        {loginUserName &&
            (followStatus ?
                <Button onClick={() => { unfollowHandler() }} >Unfolow <span className={style.username} >{username}</span></Button>
                :
                <Button onClick={() => { followHandler() }} >Follow <span className={style.username} >{username}</span></Button>
            )
        }
    </>
}

export const FollowButton = React.memo(FollowButtonInner)