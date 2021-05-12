import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from "../../redux/storeType";
import UserPreview from '../UserPreview';
import FavoritesCount from '../FavoritesCount'
import { deleteArticle } from '../../utils/api';
import IconButton from '../IconButton';

import { useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';

import { ReactComponent as Bin } from '../../assets/Bin.svg'

import style from './FeedCard.module.scss';

function FeedCard({
    slug,
    title,
    description,
    tagList,
    createdAt,
    favorited,
    favoritesCount,
    author }: Article) {
    const username = useSelector((state: RootState) => state.user.user.username);
    const [loading, changeLoading] = useState<boolean>(false);

    const tags = tagList.map((tag) => {
        return <span className={style.tag} >#{tag}</span>
    })

    const removeArticle = async () => {
        try {
            changeLoading(true)
            await deleteArticle(slug)
        } catch (e) {
            alert(e)
        }
        finally {
            changeLoading(false)
        }
    }

    return (
        <div className={style.feedCard}>
            <div className={style.header}>
                <UserPreview username={author.username} image={author.image} date={createdAt} />
                <div className={style.headerLeftSide} >
                    <FavoritesCount favorited={favorited} favoritesCount={favoritesCount} slug={slug} />
                    {username === author.username && <IconButton onClick={removeArticle} disabled={loading} ><Bin className={style.bin} /></IconButton>}
                </div>
            </div>
            <div className={style.content}>
                <h3 className={style.title}>{title}</h3>
                <div className={style.subtitle}>{description}</div>

                <Link to={`/article${slug}`} className={style.link} >Read more...</Link>
            </div>
            <div className={style.footer}>
                {tags}
            </div>
        </div>
    );
}

export default FeedCard;
