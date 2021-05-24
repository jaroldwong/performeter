import React from 'react';
import JobFunction from './JobFunction';
import SupportingComment from './SupportingComment';
import { Button, Heading } from 'react-bulma-components';

const JobFunctions = ({ jobFunctions, dispatch }) => {
  const addJobFunction = () => {
    dispatch({ type: 'ADD_JOB_FUNCTION' });
  };

  const updateJobFunction = (id, event) => {
    dispatch({
      type: 'UPDATE_JOB_FUNCTION',
      payload: { id, event },
    });
  };

  const addComment = (id) => {
    dispatch({ type: 'ADD_COMMENT', payload: { id } });
  };

  const updateComment = (jobFunctionId, commentIndex, newComment) => {
    dispatch({
      type: 'UPDATE_COMMENT',
      payload: { jobFunctionId, commentIndex, newComment },
    });
  };

  const deleteComment = (jobFunction, commentIndex) => {
    dispatch({
      type: 'DELETE_COMMENT',
      payload: { jobFunction, commentIndex },
    });
  };

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
