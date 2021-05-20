import React from 'react';
import Goal from './Goal';
import PropTypes from 'prop-types';

import { Button, Heading } from 'react-bulma-components';

const Goals = ({ goals, addGoal, updateGoal }) => {
  return (
    <>
      <Heading size={3}>
        Goals
        <Button style={{ marginLeft: '1em' }} onClick={addGoal}>
          Add Goal
        </Button>
      </Heading>
      {goals.map((goal) => (
        <Goal
          key={goal.id}
          id={goal.id}
          title={goal.title}
          value={goal.value}
          handleUpdate={updateGoal}
        />
      ))}
    </>
  );
};

Goals.propTypes = {
  goals: PropTypes.arrayOf(PropTypes.object),
  addGoal: PropTypes.func,
  updateGoal: PropTypes.func,
};

export default Goals;
