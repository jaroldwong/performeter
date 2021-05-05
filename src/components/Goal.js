import React from 'react';

const Goal = ({ title, value, handleGoalChange }) => (
  <div className="box">
    <div className="field">
      <label className="label">{title}</label>
      <div className="control">
        <textarea
          name="goals"
          className="textarea"
          placeholder="Plan out your future goals"
          value={value}
          onChange={handleGoalChange}
        ></textarea>
      </div>
    </div>
  </div>
);

export default Goal;
