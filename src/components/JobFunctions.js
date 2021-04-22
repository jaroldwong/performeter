import React from 'react';
import SupportingComment from './SupportingComment';

const JobFunctions = (props) => {
  const percentValues = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

  return (
    <div>
      <div className="box">
        <h2 className="subtitle">Job Function</h2>
        <progress className="progress is-success" value="3" max="7">
          0%
        </progress>
        <div className="field">
          <label className="label">Percentage</label>
          <div className="control">
            <div className="select is-small">
              <select>
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
