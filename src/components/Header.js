import React from 'react';
import PropTypes from 'prop-types';

import { Button, Heading, Navbar } from 'react-bulma-components';

const exportText = ({ state, achievements, goals }) => {
  const jobFunctionsTitle = '<p><strong>Job Functions</strong></p>';

  const jobFunctionsText = state.map((item) => {
    const heading = `<p>${item.percentage} - ${item.description} </p>`;

    const comments = item.comments.reduce((acc, curr) => {
      return acc.concat(
        `In the competency of ${curr.competency}, I ${curr.indicator} by ${curr.example}<br><br>`
      );
    }, '');

    return heading + comments;
  });

  const achievementsTitle = '<p><strong>Achievements</strong></p>';
  const achievementsText = `${achievements.replace(/\n/g, '<br>')}<br><br>`;
  const goalsTitle = '<p><strong>Goals</strong></p>';
  const goalsText = goals.map((goal) => {
    return `${goal.title}<br> ${goal.value.replace(/\n/g, '<br>')}`;
  });

  const combinedText = [
    jobFunctionsTitle,
    ...jobFunctionsText,
    achievementsTitle,
    achievementsText,
    goalsTitle,
    ...goalsText,
  ];

  const string = combinedText.reduce((acc, curr) => {
    return acc.concat(curr);
  }, '');

  const wnd = window.open('about:blank', '', '_blank');
  wnd.document.write(string);
};

const Header = ({ state, achievements, goals, resetData }) => (
  <Navbar color="light">
    <Navbar.Brand>
      <Navbar.Item>
        <Heading size={4}>PerforMeter</Heading>
      </Navbar.Item>
    </Navbar.Brand>

    <Navbar.Menu>
      <Navbar.Container align="right">
        <Button.Group>
          <Button color="danger" onClick={resetData}>
            Reset
          </Button>
          <Button onClick={() => exportText({ state, achievements, goals })}>
            Export as Text
          </Button>
        </Button.Group>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
);

Header.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object),
  resetData: PropTypes.func,
};

export default Header;
