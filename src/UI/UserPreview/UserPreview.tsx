import React from 'react';
import { Link } from 'react-router-dom'

import style from './UserPreview.module.scss'

type Props = {
    username: string,
    image: string,
    date?: string,
}

const UserPreviewInner = ({ image, date, username }: Props) => {
    return (
        <div className={style.userPreview} >
            <img className={style.image} src={image} alt={username} />
            <div className={style.textWrap} >
                <Link to={`/profile${username}`} ><span className={style.name}>{username}</span></Link>
                {date && <span className={style.date} >{new Date(date).toDateString()}</span>}
            </div>
        </div >
    )
}

export const UserPreview = React.memo(UserPreviewInner)