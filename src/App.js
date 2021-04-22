import './App.css';

import React from 'react';
import Header from './components/Header';
import CompetencyCounter from './components/CompetencyCounter';
import JobFunctions from './components/JobFunctions';

function App() {
  const [comments, setComment] = React.useState([]);

  const addComment = (event) => {
    setComment([
      ...comments,
      {
        competency: 'Select',
        indicator: '[behavioral indicator]',
        example: '[specific example]',
      },
    ]);
  };

  const updateComment = (commentIndex, newComment) => {
    const newState = comments.map((comment, index) => {
      if (index === commentIndex) {
        comment = newComment;
      }

      return comment;
    });

    setComment(newState);
  };

  return (
    <div className="App">
      <Header />
      <section className="section">
        <div className="columns">
          <div className="column is-one-quarter">
            <CompetencyCounter comments={comments} />
          </div>
          <div className="column is-three-quarters">
            <h1 className="title">
              Job Functions
              <button className="button" style={{ marginLeft: '1em' }}>
                Add Job Function
              </button>
            </h1>

            <JobFunctions
              comments={comments}
              addComment={addComment}
              updateComment={updateComment}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
