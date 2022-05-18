/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { BEHAVIORAL_INDICATORS } from '../utils/constants';

const IndicatorDropdown = ({ competency, indicator, onUpdate }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleSetIndicator = (e) => {
    e.preventDefault();
    onUpdate(e.target.innerHTML);
  };

  if (!competency) {
    return (
      <div className="dropdown">
        <div className="dropdown-trigger">
          <button
            className="button is-small"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>select a competency first</span>
            <span className="icon is-small">v</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`dropdown ${isActive && 'is-active'}`}>
      <div className="dropdown-trigger">
        <button
          className="button is-small"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={handleActiveToggle}
        >
          <span>[behavioral indicator]</span>
          <span className="icon is-small">v</span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {BEHAVIORAL_INDICATORS[competency].map((indicator, index) => (
            <a
              href="#"
              className="dropdown-item"
              key={`${indicator + index}`}
              onClick={handleSetIndicator}
            >
              {indicator}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndicatorDropdown;
