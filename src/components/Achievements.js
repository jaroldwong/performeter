import React from 'react';
import PropTypes from 'prop-types';

const Achievements = ({ achievements, updateAchievements }) => {
  return (
    <>
      <h1 className="title">Achievements</h1>
      <div className="box">
        <div className="field">
          <label className="label">Achievements</label>
          <div className="control">
            <textarea
              name="achievement"
              className="textarea"
              placeholder="Address your goals from last year"
              value={achievements}
              onChange={updateAchievements}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

Achievements.propTypes = {
  achievements: PropTypes.string,
  updateAchievements: PropTypes.func,
};

export default Achievements;
