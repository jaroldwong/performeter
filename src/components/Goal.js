import { useState } from 'react';
import PropTypes from 'prop-types';

const Goal = ({ id, title, value, handleUpdate }) => {
  const [text, setText] = useState(value);

  const handleChange = (event) => {
    const text = event.target.value;
    const newGoal = {
      id,
      title,
      value: text,
    };

    setText(text);
    handleUpdate(newGoal);
  };

  return (
    <div className="box">
      <div className="field">
        <label className="label">{title}</label>
        <div className="control">
          <textarea
            name="goals"
            className="textarea"
            placeholder="Plan out your future goals"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

Goal.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  handleUpdate: PropTypes.func,
};

export default Goal;
