import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';

import Button from '../../UI/Button';
import Spinner from "../../UI/Spinner"
import FollowButton from '../FollowButton';
import { GetProfile } from '../../utils/api';

import { logout } from '../../redux/userSlice';
import { Profile } from '../../redux/storeType'
import { RootState } from '../../rootReducer';

import style from './Profile.module.scss';



const ProfileInner = () => {
    const dispatch = useDispatch()
    const { username }: { username: string } = useParams();
    const loginUserName = useSelector((store: RootState) => store.user.user.username);
    const [profile, setProfile] = useState<Profile>();
    const fetchProfile = async () => {
        try {
            const response = await GetProfile(username)
            const {
                data: { profile },
            } = response;
            setProfile(profile)
        } catch {
            alert('Что-то пошло не так...')
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <React.Fragment>
            <div className={style.profile} >
                {profile ?
                    <div className={style.profileWrap}>
                        <img src={profile.image} />
                        <h3>{username}</h3>
                        <p>{profile.bio}</p>
                        {loginUserName === username ?
                            <div className={style.logoutWrap}>
                                <Link className={style.logout} to={'/settings'} >Edit profile</Link>
                                <Button theme={'primary'} onClick={() => dispatch(logout())} >Logout</Button>
                            </div> :
                            <FollowButton username={username} follow={profile.following} />
                        }
                    </div> : <Spinner />}
            </div>
        </React.Fragment>
    )
}

export const ProfilePage = React.memo(ProfileInner);
