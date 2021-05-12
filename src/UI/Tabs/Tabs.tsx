import React, { useState } from 'react';
import Button from '../Button';
import TabsItem from './TabsItem';

type TabsProps = {
    children: React.ReactComponentElement<typeof TabsItem>[]
}

const TabsInner = ({ children }: TabsProps) => {
    const [numberActiveTab, setNumberActiveTab] = useState<number>(0)


    const butt = () => {
        return children.map((tab, index) => <Button key={index} onClick={() => setNumberActiveTab(index)} >{tab.props.label}</Button>)
    }

    return <>
        {butt()}
        {children[numberActiveTab]}
    </>
}

export const Tabs = React.memo(TabsInner)