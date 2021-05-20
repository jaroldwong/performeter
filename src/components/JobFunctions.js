import React from 'react';
import JobFunction from './JobFunction';
import SupportingComment from './SupportingComment';
import { Button, Heading } from 'react-bulma-components';

const JobFunctions = ({
  jobFunctions,
  addJobFunction,
  addComment,
  updateJobFunction,
  updateComment,
  deleteComment,
}) => {
  return (
    <>
      <Heading size={3}>
        Job Functions
        <Button style={{ marginLeft: '1em' }} onClick={addJobFunction}>
          Add Job Function
        </Button>
      </Heading>

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
