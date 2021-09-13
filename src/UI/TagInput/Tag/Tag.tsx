import React from 'react';
import {TagProps} from "../../../type/common";

import style from './Tag.module.scss'

const TagInner = ({ id, value, deleteTag }: TagProps) => {
    return (
        <span className={style.tag} onClick={() => deleteTag(id)} >
            #{value}
        </span>
    )
}

export const Tag = React.memo(TagInner);