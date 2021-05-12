import React from 'react'

type Props = {
    icon: any,
    styles?: any;
}

const IconSVGInner = ({ icon, ...params }: Props) => {
    return (
        <>
            {icon}
            < svg viewBox={icon.viewBox} className={params.styles || ''} >
                <use xlinkHref={`#${icon.id}`} />
            </svg >
        </>
    );

}

export const IconSVG = React.memo(IconSVGInner);
