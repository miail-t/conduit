import React from 'react';
import Button from '../../../UI/Button';

import style from './PagginationItem.module.scss'

type PagginationItemProps = {
    value: string | number;
    onClick?: (e: React.MouseEvent) => void;
}

const PagginationItemInner = ({ value, onClick }: PagginationItemProps) => {
    return <>
        <Button customClass={style.PaggItem} onClick={onClick} >{value}</Button>
    </>
}

export const PagginationItem = React.memo(PagginationItemInner);