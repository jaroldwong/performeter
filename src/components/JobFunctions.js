import React from 'react';

const JobFunctions = (props) => {
  const percentValues = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

  const [state, setState] = React.useState({
    percent: '',
  });

  return (
    <div>
      <div className="box">
        <h2 className="subtitle">Job Function</h2>
        <progress
          className="progress is-success"
          value={state.percent ? props.comments.length : 0}
          max={state.percent ? parseInt(state.percent) / 10 : 0}
        >
          {state.percent}
        </progress>
        <div className="field">
          <label className="label">Percentage</label>
          <div className="control">
            <div className="select is-small">
              <select
                onChange={(e) => {
                  setState({ percent: e.target.value });
                }}
              >
                <option value="">Select</option>
                {percentValues.map((value) => (
                  <option
                    value={value}
                    key={`${props.id}-${value}`}
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
              className="textarea"
              placeholder="Copy and paste job function here"
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

export default JobFunctions;
