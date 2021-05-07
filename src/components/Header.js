import React from 'react';

const exportText = (state) => {
  const text = state.map((item) => {
    const heading = `<p>${item.percentage} - ${item.description} </p>`;

    const comments = item.comments.reduce((acc, curr) => {
      return acc.concat(
        `In the competency of ${curr.competency}, I ${curr.indicator} by ${curr.example}<br><br>`
      );
    }, '');

    return heading + comments;
  });

  const string = text.reduce((acc, curr) => {
    return acc.concat(curr);
  }, '');

  const wnd = window.open('about:blank', '', '_blank');
  wnd.document.write(string);
};

const Header = ({ state, resetData }) => (
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
            <button className="button is-danger" onClick={resetData}>
              Reset
            </button>
            <button className="button" onClick={() => exportText(state)}>
              Export as Text
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
