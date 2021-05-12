import React from 'react';

type TabsItemProps = {
    label: string,
    children: React.ReactNode
}

const TabsItemInner = ({ label, children }: TabsItemProps) => {
    return <>{children}</>
}

export const TabsItem = React.memo(TabsItemInner)