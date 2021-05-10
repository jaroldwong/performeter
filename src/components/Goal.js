import React from 'react';
import PropTypes from 'prop-types';

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

Goal.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  handleGoalChange: PropTypes.func,
};

export default Goal;
