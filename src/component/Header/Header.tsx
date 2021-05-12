import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from '../../rootReducer'

import style from './Header.module.scss';


export default function Header() {
    const { username } = useSelector((state: RootState) => state.user.user);

    return (
        <div className={style.header}>
            <Link className={style.logo} to={'/'}>conduit</Link>
            <div className="rigth">
                {username ? <>
                    <Link to={'/Settings'}>Setting</Link>
                    <Link to={'/createArticle'}>New article</Link>
                    <Link to={`/profile${username}`}>{username}</Link>
                </> : <>
                        <Link to={'/registration'}>Sign Up</Link>
                        <Link to={'/login'}>Sign In</Link>
                    </>}
            </div>
        </div>
    );
}
