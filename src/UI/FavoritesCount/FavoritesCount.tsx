import React, { useState } from 'react';
import { addFavoriteArticle, deleteFavoriteArticle } from '../../utils/api'
import cls from 'classnames'
import { AxiosResponse } from 'axios';

//import Like from '../../assets/Like_icon'

import style from './FavoritesCount.module.scss'
import { Article } from '../../redux/storeType'
import IconButton from '../IconButton';

import { ReactComponent as Like } from '../../assets/Like.svg';

type Props = {
    favoritesCount: number,
    favorited: boolean,
    slug: string,
    label?: string
}

const FavoritesCountInner = ({ favoritesCount, favorited, slug, label }: Props) => {

    const [count, changeFavoriteCount] = useState<number>(favoritesCount);
    const [favoritedStatus, changeFavorited] = useState<boolean>(favorited);
    const [loading, changeLoading] = useState<boolean>(false);

    const handelClick = async () => {
        try {
            changeLoading(true);
            let response: AxiosResponse<{ article: Article }>;
            if (favoritedStatus) {
                response = await deleteFavoriteArticle(slug);
            } else {
                response = await addFavoriteArticle(slug);
            }
            changeFavoriteCount(response.data.article.favoritesCount);
            changeFavorited(response.data.article.favorited);
        } catch (e) {
            alert(e)
        } finally {
            changeLoading(false)
        }
    }

    const counter = cls(
        { [style.counter]: true },
        { [style.favorite]: favoritedStatus }
    )

    return (
        <span className={counter} onClick={handelClick}>
            <span className={style.label} >{label}</span>
            <span className={style.count} >{count}</span>
            <IconButton onClick={handelClick} disabled={loading} ><Like className={style.icon} /></IconButton>
        </span>
    )
}

export const FavoritesCount = React.memo(FavoritesCountInner)