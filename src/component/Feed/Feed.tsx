import React, { useEffect } from 'react';
import FeedCard from '../../UI/FeedCard';
import Paggination from '../Paggination';
import Spinner from "../../UI/Spinner"

import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../../rootReducer';
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/articleSlice";
import { limit } from '../../@constants';

import './Feed.scss';

export default function Feed() {
    const history = useHistory()
    const { pageNember }: { pageNember: string } = useParams();
    const { currentArticles, articlesCount, loading } = useSelector((state: RootState) => state.article);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles({ limit: limit, offset: Number(pageNember) * limit - limit }))
    }, [pageNember])

    const clickHandler = (index: number) => {
        history.push(`/Home/globalfeed${index}`)
    }

    return (
        <>
            <div className="Feed">
                <div className="article-wrap">
                    {loading ? <Spinner /> :
                        <>
                            {currentArticles.map((article) => {
                                return <FeedCard key={article.updatedAt}  {...article} />
                            })}
                            <Paggination itemCount={articlesCount} pageLimit={limit} clickHandler={clickHandler} />
                        </>
                    }
                </div>
            </div>
        </>
    );
}
