import React from 'react';

const Tabs = ({ activeTab, updateNav }) => {
  return (
    <div className="tabs">
      <ul>
        <li className={activeTab === 'Job Functions' ? 'is-active' : null}>
          <a href="#JobFunctions" onClick={updateNav}>
            Job Functions
          </a>
        </li>
        <li className={activeTab === 'Achievements' ? 'is-active' : null}>
          <a href="#Achievements" onClick={updateNav}>
            Achievements
          </a>
        </li>
        <li className={activeTab === 'Future Goals' ? 'is-active' : null}>
          <a href="#Goals" onClick={updateNav}>
            Future Goals
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Tabs;
