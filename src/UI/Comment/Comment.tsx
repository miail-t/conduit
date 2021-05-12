import React from 'react';

import { CommentType } from "../../type/request";
import { ReactComponent as Bin } from '../../assets/Bin.svg'
import UserPreview from '../UserPreview';

import IconButton from '../IconButton';
import { RootState } from '../../rootReducer';
import { useSelector } from 'react-redux';

import style from './Comment.module.scss';

interface CommentProps extends CommentType {
  slug: string,
  deleteComment: (slug: string, id: number) => void
}


const Comment = ({ slug, deleteComment, id, body, author, createdAt }: CommentProps) => {
  const loginUser = useSelector((state: RootState) => state.user.user.username)

  return (
    <div className={style.comment}>
      <div className={style.header}>
        <UserPreview username={author.username} date={''} image={author.image} />
        <span className={style.date} >{new Date(createdAt).toDateString()}</span>
        {loginUser === author.username && <IconButton onClick={() => deleteComment(slug, id)} ><Bin className={style.bin} /></IconButton>}
      </div>
      <div className={style.body}>
        <p>{body}</p>
      </div>
    </div>
  )

}

export default Comment