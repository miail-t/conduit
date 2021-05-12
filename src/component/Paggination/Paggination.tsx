import React from 'react';
import PagginationItem from './PagginationItem';

import style from './Paggination.module.scss';

type Props = {
    itemCount: number,
    pageLimit: number,
    clickHandler: (itemIndex: number) => void
}

const Paggination = ({ itemCount, pageLimit, clickHandler }: Props) => {
    const totalPages = Math.ceil(itemCount / pageLimit);
    let pagContainer: React.ReactComponentElement<typeof PagginationItem> | number[] = [];
    pagContainer = Array.from({ length: totalPages }, (v, k) => k + 1);


    return (
        <div className={style.Paggination}>
            {pagContainer.map((elem, index) => { return <PagginationItem key={index + elem} value={elem} onClick={() => clickHandler(elem)} /> })}
        </div>
    );
}

export default Paggination;
