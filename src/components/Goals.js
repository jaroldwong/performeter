import React from 'react';
import Goal from './Goal';

const Goals = ({ goals, onAddGoal, onGoalChange }) => {
  return (
    <>
      <h1 className="title">
        Goals
        <button
          className="button"
          style={{ marginLeft: '1em' }}
          onClick={onAddGoal}
        >
          Add Goal
        </button>
      </h1>
      {goals.map((goal, index) => (
        <Goal
          key={goal.title}
          title={goal.title}
          value={goal.value}
          handleGoalChange={(e) => onGoalChange(e, index)}
        />
      ))}
    </>
  );
};

export default Goals;
