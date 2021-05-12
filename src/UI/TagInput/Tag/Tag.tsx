import React from 'react';

import style from './Tag.module.scss'

type TagProps = {
    id: number
    value: string
    deleteTag: (id: number) => void
}

const TagInner = ({ id, value, deleteTag }: TagProps) => {
    return (
        <span className={style.tag} onClick={() => deleteTag(id)} >
            #{value}
        </span>
    )
}

export const Tag = React.memo(TagInner);