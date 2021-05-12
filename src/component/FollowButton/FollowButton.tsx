import React, { useState } from 'react';
import { useSelector, useStore } from 'react-redux';
import { RootState } from '../../rootReducer';
import Button from '../../UI/Button';
import { followUser, unfollowUser } from '../../utils/api';

import style from './FollowButton.module.scss'

type Props = {
    username: string,
    follow: boolean
}

const FollowButtonInner = ({ username, follow }: Props) => {
    const loginUserName = useSelector((store: RootState) => store.user.user.username);
    const [followStatus, changeFollowStatus] = useState<boolean>(follow);
    //const [loading, changeLoading] = useState<boolean>(false);

    const followHandler = async () => {
        try {
            const { data } = await followUser(username);
            changeFollowStatus(data.profile.following);
        } catch (e) {
            alert(e)
        }
    }

    const unfollowHandler = async () => {
        try {
            const { data } = await unfollowUser(username);
            changeFollowStatus(data.profile.following);
        } catch (e) {
            alert(e)
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