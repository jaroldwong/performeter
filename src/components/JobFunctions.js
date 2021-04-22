import React, { useState } from 'react';
import SupportingComment from './SupportingComment';

const JobFunctions = (props) => {
  const percentValues = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

  const [state, setState] = React.useState({
    percent: '0%',
  });

  return (
    <div>
      <div className="box">
        <h2 className="subtitle">Job Function</h2>
        <progress
          className="progress is-success"
          value={props.comments.length}
          max={parseInt(state.percent) / 10}
        >
          0%
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
                <option>Select</option>
                {percentValues.map((value) => (
                  <option key={value}>{`${value}%`}</option>
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

        {props.comments.map((comment, i) => (
          <SupportingComment
            competency={comment.competency}
            indicator={comment.indicator}
            example={comment.example}
            key={comment.competency + i}
          />
        ))}
      </div>
    </div>
  );
};

export default JobFunctions;
