import React from 'react';
import JobFunction from './JobFunction';
import SupportingComment from './SupportingComment';

const JobFunctions = ({
  jobFunctions,
  handleAddJobFunction,
  addComment,
  updateJobFunction,
  updateComment,
  deleteComment,
}) => {
  return (
    <>
      <h1 className="title">
        Job Functions
        <button
          className="button"
          style={{ marginLeft: '1em' }}
          onClick={handleAddJobFunction}
        >
          Add Job Function
        </button>
      </h1>

      {jobFunctions.map((jobFunction) => (
        <JobFunction
          jobFunction={jobFunction}
          key={jobFunction.id}
          addComment={() => {
            addComment(jobFunction.id);
          }}
          updateJobFunction={(e) => {
            updateJobFunction(jobFunction.id, e);
          }}
        >
          {jobFunction.comments.map((comment, commentIndex) => (
            <SupportingComment
              competency={comment.competency}
              indicator={comment.indicator}
              example={comment.example}
              updateComment={(newComment) => {
                updateComment(jobFunction.id, commentIndex, newComment);
              }}
              deleteComment={() => deleteComment(jobFunction, commentIndex)}
              key={comment.competency + commentIndex}
            />
          ))}
        </JobFunction>
      ))}
    </>
  );
};

export default JobFunctions;
