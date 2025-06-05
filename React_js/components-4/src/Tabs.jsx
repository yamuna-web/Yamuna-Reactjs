import React, { useState, createContext, useContext } from 'react';

const TabsContext = createContext();

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabsContext.Provider>
  );
};

const TabList = ({ children }) => <div>{children}</div>;

const Tab = ({ index, children }) => {
  const { setActiveIndex } = useContext(TabsContext);
  return <button onClick={() => setActiveIndex(index)}>{children}</button>;
};

const TabPanels = ({ children }) => {
  const { activeIndex } = useContext(TabsContext);
  return <div>{children[activeIndex]}</div>;
};

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;

export default Tabs;
