import React from 'react';
import Goal from './Goal';

const Goals = ({ goals, onGoalChange }) => {
  return (
    <>
      <h1 className="title">Goals</h1>
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
