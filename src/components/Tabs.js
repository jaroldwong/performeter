import React from 'react';

const Tabs = ({ activeNav, handleNav }) => {
  return (
    <div className="tabs">
      <ul>
        <li className={activeNav === 'Job Functions' ? 'is-active' : null}>
          <a href="#JobFunctions" onClick={handleNav}>
            Job Functions
          </a>
        </li>
        <li className={activeNav === 'Achievements' ? 'is-active' : null}>
          <a href="#Achievements" onClick={handleNav}>
            Achievements
          </a>
        </li>
        <li className={activeNav === 'Future Goals' ? 'is-active' : null}>
          <a href="#Goals" onClick={handleNav}>
            Future Goals
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Tabs;
