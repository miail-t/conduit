import React from 'react';

import Feed from '../../component/Feed';
import { Tabs } from '../../UI/Tabs/Tabs';
import TabsItem from '../../UI/Tabs/TabsItem';


const HomeInner = () => {
    return <>
        <Tabs>
            <TabsItem key={1} label={'Global feed'}><Feed /></TabsItem>
            <TabsItem key={2} label={'Your feed'}> 12 </TabsItem>
        </Tabs>
    </>
}

export const Home = React.memo(HomeInner)