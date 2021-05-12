import React, { useEffect, useState } from 'react';
import Input from '../Input';
import Tag from './Tag'
import IconButton from '../IconButton';
import { ReactComponent as AddIcon } from '../../assets/Add.svg'

import style from './TagInput.module.scss'

interface Props {
    label?: string,
    onChange: (tagLisr: Tag[]) => void,
}

type Tag = {
    id: number,
    value: string
}

const TagInputInner = ({ onChange, ...restProps }: Props) => {
    const [tagsList, changeTagsList] = useState<Tag[]>([])
    const [inputValue, changeValue] = useState<string>('');

    useEffect(() => {
        onChange(tagsList);
    }, [tagsList])

    const addTagToArray = () => {
        if (inputValue !== '') {
            changeTagsList([...tagsList, { id: tagsList.length, value: inputValue }]);
            changeValue('');
        }
    };

    const deleteTag = (deleteTagId: number) => {
        const newTagsList = tagsList.filter(tag => tag.id !== deleteTagId)
        changeTagsList(newTagsList);
    }

    return (
        <div className={style.inputWrap}>
            {tagsList && tagsList.map((tag) => {
                return <Tag key={tag.id} id={tag.id} value={tag.value} deleteTag={deleteTag} />;
            })}
            <Input onChange={changeValue} value={inputValue} {...restProps} />
            <IconButton type='button' onClick={addTagToArray} ><AddIcon className={style.AddIcon} /></IconButton>
        </div>
    )
}

export const TagInput = React.memo(TagInputInner);