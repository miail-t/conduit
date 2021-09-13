import React, { useState } from 'react';

import Form from '../../UI/Form';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import TextArea from '../../UI/TextArea';
import TagInput from '../../UI/TagInput';

import { addArticle } from '../../utils/api';

import { useAsyncCallback } from '../../hook/useAsyncCallback';
import { useHistory } from 'react-router-dom';
import {TagList} from "../../UI/TagInput/TagInput";

import './ArticleForm.module.scss';


const ArticleFormInner = () => {
    const history = useHistory()

    const [title, changeTitle] = useState<string>('');
    const [description, changeDescription] = useState<string>('');
    const [body, changeBody] = useState<string | undefined>('');
    const [tagListItems, changeTag] = useState<TagList[]>([]);

    const onSubmit = async () => {
        const tagList = tagListItems.map(tag => { return tag.value })
        await addArticle({ title, description, body, tagList })
        history.push('/')
    }

    const [asyncSubmit, loading, error] = useAsyncCallback(onSubmit)

    return (
        <Form onSubmit={asyncSubmit} >
            <h1>ArticleForm</h1>
            <Input label={'Article title'} onChange={changeTitle} value={title} hasError={error.title} />
            <Input label={'Description'} onChange={changeDescription} value={description} hasError={error.title} />
            <TextArea onChange={changeBody} value={body} hasError={error.body} />
            <TagInput label={'Enter tag'} onChange={changeTag} />
            <Button type={'submit'} loading={loading} >Publish article</Button>
        </Form>
    )
}

export const ArticleForm = React.memo(ArticleFormInner);
