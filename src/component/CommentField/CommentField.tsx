import React, { useState } from 'react';

import TextArea from '../../UI/TextArea';
import Button from '../../UI/Button';

import { addComments } from '../../utils/api';

import style from './CommentField.module.scss';
import { CommentType } from '../../type/request';
import cls from 'classnames';


type Props = {
    slug: string,
    customClass?: string,
    addComment: (value: CommentType) => void;
}

const CommentFieldInner = ({ slug, customClass, addComment }: Props) => {
    const [body, changeBody] = useState<string>('');
    const [loading, changeLoading] = useState<boolean>(false);
    const postComment = async () => {
        if (body !== '') {
            try {
                changeLoading(true);
                const { data } = await addComments(slug, body);
                addComment(data.comment);
                changeBody('');
            } catch (e) {
                alert(e);
            }
            finally {
                changeLoading(false);
            }
        }
    }

    const Fild = cls({
        [style.wrapper]: true,
        //[style.customClass: `${customClass}`,
    })

    return <div className={Fild}>
        <TextArea className={style.textArea} onChange={changeBody} value={body} placeholder={'Write a comment...'} />
        <Button className={style.button} loading={loading} onClick={postComment} >Post comment</Button>
    </div>
}

export const CommentField = React.memo(CommentFieldInner);