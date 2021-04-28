import React from 'react';

const Tabs = ({ activeNav, handleNav }) => {
  return (
    <div className="tabs">
      <ul>
        <li className={activeNav === 'Job Functions' && 'is-active'}>
          <a role="button" onClick={handleNav}>
            Job Functions
          </a>
        </li>
        <li className={activeNav === 'Achievements' && 'is-active'}>
          <a role="button" onClick={handleNav}>
            Achievements
          </a>
        </li>
        <li className={activeNav === 'Future Goals' && 'is-active'}>
          <a role="button" onClick={handleNav}>
            Future Goals
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Tabs;
