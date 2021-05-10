import React from 'react';
import Goal from './Goal';
import PropTypes from 'prop-types';

const Goals = ({ goals, addGoal, updateGoal }) => {
  return (
    <>
      <h1 className="title">
        Goals
        <button
          className="button"
          style={{ marginLeft: '1em' }}
          onClick={addGoal}
        >
          Add Goal
        </button>
      </h1>
      {goals.map((goal, index) => (
        <Goal
          key={goal.title}
          title={goal.title}
          value={goal.value}
          handleGoalChange={(e) => updateGoal(e, index)}
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
