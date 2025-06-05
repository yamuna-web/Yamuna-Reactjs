import React from 'react';
import Tabs from './Tabs';

const TabsExample = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
        <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <div>Content of Tab 1</div>
        <div>Content of Tab 2</div>
      </Tabs.Panels>
    </Tabs>
  );
};

export default TabsExample;
