import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getArticle} from '../../utils/api';
import FavoritesCount from '../../UI/FavoritesCount';
import UserPreview from '../../UI/UserPreview';
import CommentList from '../CommentList';
import FollowButton from '../FollowButton';
import {ArticleType} from '../../type/request'

import Spinner from "../../UI/Spinner"

import style from './Article.module.scss';

interface ArticleParams {
    slug: string
}

const ArticleInner = () => {
    const {slug}: ArticleParams = useParams();
    const [article, setArticle] = useState<ArticleType>();
    const fetchArticle = async (slug: string) => {
        const {data} = await getArticle(slug);
        setArticle(data.article)
    }

    useEffect(() => {
        fetchArticle(slug);
    }, [slug])

    return (
        <React.Fragment>
            <div className={style.articlePage}>
                {article ? <>
                        <div className={style.articleBody}>
                            <div className="title">
                                <h2 className={style.title}>{article.title}</h2>
                            </div>
                            <p className={style.body}>{article.body}</p>
                            <div className={style.tagWrap}>{article.tagList.map((tag: string) => {
                                return <span className={style.tag}>{tag}</span>
                            })}</div>
                        </div>
                        <div className={style.about}>
                            <div className={style.userInfo}>
                                <UserPreview username={article.author.username} image={article.author.image} date={''}/>
                                <FollowButton username={article.author.username} follow={article.author.following}/>
                            </div>
                            <FavoritesCount slug={article.slug} favorited={article.favorited}
                                            favoritesCount={article.favoritesCount}/>
                        </div>
                    </>
                    : <Spinner/>}

                <CommentList slug={slug}/>
            </div>
        </React.Fragment>
    )
}

export const Article = React.memo(ArticleInner);