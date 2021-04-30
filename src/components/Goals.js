import React from 'react';

const Goals = ({ goals, onGoalsChange }) => {
  return (
    <>
      <h1 className="title">Goals</h1>
      <div className="box">
        <div className="field">
          <label className="label">Goals</label>
          <div className="control">
            <textarea
              name="goals"
              className="textarea"
              placeholder="Plan out your future goals"
              value={goals}
              onChange={onGoalsChange}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;
