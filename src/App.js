import './App.css';

import React from 'react';
import Header from './components/Header';
import CompetencyCounter from './components/CompetencyCounter';
import JobFunctions from './components/JobFunctions';
import SupportingComment from './components/SupportingComment';

function App() {
  const [jobFunctions, setJobFunctions] = React.useState([
    {
      id: 'job-function-1',
      description: 'job function description goes here',
      percentage: '',
      comments: [
        { competency: 'Communication', indicator: 'foo', example: 'bar' },
      ],
    },
    {
      id: 'job-function-2',
      description: 'job function description goes here',
      percentage: '',
      comments: [{ competency: 'Teamwork', indicator: 'foo', example: 'bar' }],
    },
  ]);

  const addComment = (jobFunctionId) => {
    const newJobFunctions = jobFunctions.map((jobFunction) => {
      if (jobFunction.id === jobFunctionId) {
        debugger;
        const newComments = [
          ...jobFunction.comments,
          { competency: '', indicator: 'foo', example: 'bar' },
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

  const allComments = jobFunctions
    .map((jobFunction) => jobFunction.comments)
    .flat();

  return (
    <div className="App">
      <Header />
      <section className="section">
        <div className="columns">
          <div className="column is-one-quarter">
            <CompetencyCounter comments={allComments} />
          </div>
          <div className="column is-three-quarters">
            <h1 className="title">
              Job Functions
              <button className="button" style={{ marginLeft: '1em' }}>
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
