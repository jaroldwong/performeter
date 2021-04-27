import React from 'react';

const Header = (props) => (
  <nav className="navbar is-light">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <h1 className="title is-4">PerforMeter</h1>
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <button className="button is-danger" onClick={props.reset}>
              Reset
            </button>
            <button className="button" onClick={props.export}>
              Export as Plain Text
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
