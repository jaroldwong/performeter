import './App.css';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CompetencyCounter from './components/CompetencyCounter';
import JobFunctions from './components/JobFunctions';
import SupportingComment from './components/SupportingComment';

function App() {
  // use function to only run once per render
  const initialState = () =>
    JSON.parse(window.localStorage.getItem('performeter')) || [];

  const [jobFunctions, setJobFunctions] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem('performeter', JSON.stringify(jobFunctions));
  }, [jobFunctions]); // only activate when value changes

  const addComment = (jobFunctionId) => {
    const newJobFunctions = jobFunctions.map((jobFunction) => {
      if (jobFunction.id === jobFunctionId) {
        const newComments = [
          ...jobFunction.comments,
          {
            competency: '',
            indicator: '[behavioral indicator]',
            example: '[specific example]',
          },
        ];

        return { ...jobFunction, comments: newComments };
      } else {
        return jobFunction;
      }
    });

    setJobFunctions(() => newJobFunctions);
  };

  const updateComment = (jobFunctionId, commentIndex, newComment) => {
    const jobFunction = jobFunctions.find((jf) => jf.id === jobFunctionId);

    const updatedComments = jobFunction.comments.map((comment, idx) => {
      if (idx === commentIndex) {
        return newComment;
      } else {
        return comment;
      }
    });

    const newJobFunction = { ...jobFunction, comments: updatedComments };

    const newJobFunctions = jobFunctions.map((jobFunction) => {
      if (jobFunction.id === jobFunctionId) {
        return newJobFunction;
      } else {
        return jobFunction;
      }
    });

    setJobFunctions(() => newJobFunctions);
  };

  const deleteComment = (jobFunction, commentIndex) => {
    const filteredComments = jobFunction.comments.filter(
      (_, index) => index !== commentIndex
    );

    const updatedJobFunction = { ...jobFunction, comments: filteredComments };

    const newJobFunctions = jobFunctions.map((jobFunction) =>
      jobFunction.id === updatedJobFunction.id
        ? updatedJobFunction
        : jobFunction
    );

    setJobFunctions(() => newJobFunctions);
  };

  const handleAddJobFunction = () => {
    const incrementId = jobFunctions.length + 1;

    setJobFunctions([
      ...jobFunctions,
      {
        id: `job-function-${incrementId}`,
        description: 'job function description goes here',
        percentage: '',
        comments: [
          {
            competency: '',
            indicator: '[behavioral indicator]',
            example: '[specific example]',
          },
        ],
      },
    ]);
  };

  const reset = () => {
    setJobFunctions([]);
  };

  const allComments = jobFunctions
    .map((jobFunction) => jobFunction.comments)
    .flat();

  return (
    <div className="App">
      <Header reset={reset} />
      <section className="section">
        <div className="columns">
          <div className="column is-one-quarter">
            <CompetencyCounter comments={allComments} />
          </div>
          <div className="column is-three-quarters">
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
              <JobFunctions
                id={jobFunction.id}
                comments={jobFunction.comments}
                key={jobFunction.id}
                addComment={() => {
                  addComment(jobFunction.id);
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
                    deleteComment={() =>
                      deleteComment(jobFunction, commentIndex)
                    }
                    key={comment.competency + commentIndex}
                  />
                ))}
              </JobFunctions>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
