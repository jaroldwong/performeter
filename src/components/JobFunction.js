import React from 'react';

const JobFunction = (props) => {
  debugger;
  const percentValues = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
  const { comments, description, id, percentage } = props.jobFunction;

  return (
    <div>
      <div className="box">
        <h2 className="subtitle">Job Function</h2>
        <progress
          className="progress is-success"
          value={percentage ? comments.length : 0}
          max={percentage ? parseInt(percentage) / 10 : 0}
        >
          {percentage}
        </progress>
        <div className="field">
          <label className="label">Percentage</label>
          <div className="control">
            <div className="select is-small">
              <select
                name="percentage"
                value={percentage}
                onChange={props.updateJobFunction}
              >
                <option value="">Select</option>
                {percentValues.map((value) => (
                  <option
                    value={`${value}%`}
                    key={`${id}-${value}`}
                  >{`${value}%`}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              name="description"
              className="textarea"
              placeholder="Copy and paste job function here"
              value={description}
              onChange={props.updateJobFunction}
            ></textarea>
          </div>
        </div>
        <button className="button" onClick={props.addComment}>
          Add Supporting Comment
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default JobFunction;
