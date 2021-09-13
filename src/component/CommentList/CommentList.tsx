import React, { useCallback, useEffect, useState } from "react";
import { CommentType } from "../../type/request";
import Spinner from "../../UI/Spinner";
import Comment from "../../UI/Comment";
import { deleteComments, getComments } from "../../utils/api";
import CommentField from "../CommentField";

type CommentListProps = {
    slug: string,
}

const CommentListInner = ({ slug }: CommentListProps) => {
    const [comments, changeComments] = useState<CommentType[]>([]);

    useEffect(() => {
        fetchComments(slug);
    }, [slug])

    const fetchComments = async (slug: string) => {
        const { data } = await getComments(slug);
        changeComments(data.comments);
    }

    const addComment = (value: CommentType) => {
        changeComments((prevState) => { return [value, ...prevState] })
    }

    const deleteCommentHandler = useCallback(async (slug: string, id: number) => {
        await deleteComments(slug, id);
        changeComments(() => { return comments.filter(comment => comment.id !== id) })
    }, [comments])

    return <>
        <CommentField addComment={addComment} slug={slug} customClass={"qwerty"} />
        {comments !== [] ? (comments.map((comment) => { return <Comment deleteComment={deleteCommentHandler} key={comment.id} slug={slug} {...comment} /> })) : <Spinner />}
    </>
}

export const CommentList = React.memo(CommentListInner);