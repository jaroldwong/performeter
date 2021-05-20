import React from 'react';

import { Tabs } from 'react-bulma-components/';

const SectionTabs = ({ activeTab, updateNav }) => {
  return (
    <Tabs>
      <Tabs.Tab
        active={activeTab === 'Job Functions' ? true : false}
        onClick={updateNav}
      >
        Job Functions
      </Tabs.Tab>
      <Tabs.Tab
        active={activeTab === 'Achievements' ? true : false}
        onClick={updateNav}
      >
        Achievements
      </Tabs.Tab>
      <Tabs.Tab
        active={activeTab === 'Future Goals' ? true : false}
        onClick={updateNav}
      >
        Future Goals
      </Tabs.Tab>
    </Tabs>
  );
};
export default SectionTabs;
