import React from 'react';
import cls from 'classnames';

import styles from './Spinner.module.scss';

type SpinnerProps = {
    customClass?: string
}

function Spinner({ customClass }: SpinnerProps) {
    const spinnerStyle = cls({
        [styles.loader]: true,
        [`${customClass}`]: customClass
    })

    return <div className={spinnerStyle} ></div>
}

export default Spinner;
