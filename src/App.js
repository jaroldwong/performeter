import './App.css';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import CompetencyCounter from './components/CompetencyCounter';
import JobFunctions from './components/JobFunctions';
import Achievements from './components/Achievements';
import Goals from './components/Goals';

function App() {
  // use function to only run once per render
  const initialState = () =>
    JSON.parse(window.localStorage.getItem('performeter')) || [];

  const [jobFunctions, setJobFunctions] = useState(initialState);
  const [achievements, setAchievements] = useState('');
  const [goals, setGoals] = useState('');
  const [activeNav, setActiveNav] = useState('Job Functions');

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
    setJobFunctions([
      ...jobFunctions,
      {
        id: `job-function-${Math.random().toString(16).slice(2)}`,
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

  const updateJobFunction = (id, e) => {
    const updatedJobFunctions = jobFunctions.map((jobFunction) =>
      jobFunction.id === id
        ? { ...jobFunction, [e.target.name]: e.target.value }
        : jobFunction
    );

    setJobFunctions(updatedJobFunctions);
  };

  // Achievements Handlers
  const handleAchievementsChange = (event) => {
    setAchievements(event.target.value);
  };

  // Goals Handlers
  const handleGoalsChange = (event) => {
    setGoals(event.target.value);
  };

  const allComments = jobFunctions
    .map((jobFunction) => jobFunction.comments)
    .flat();

  const getActiveTabSection = () => {
    switch (activeNav) {
      case 'Job Functions':
        return (
          <JobFunctions
            jobFunctions={jobFunctions}
            handleAddJobFunction={handleAddJobFunction}
            addComment={addComment}
            updateJobFunction={updateJobFunction}
            updateComment={updateComment}
            deleteComment={deleteComment}
          />
        );
      case 'Achievements':
        return (
          <Achievements
            achievements={achievements}
            onAchievementsChange={handleAchievementsChange}
          />
        );
      case 'Future Goals':
        return <Goals goals={goals} onGoalsChange={handleGoalsChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header
        state={jobFunctions}
        reset={() => {
          setJobFunctions([]);
        }}
      />
      <section className="section">
        <div className="columns">
          <div className="column is-one-quarter">
            <CompetencyCounter comments={allComments} />
          </div>
          <div className="column is-three-quarters">
            <Tabs
              activeNav={activeNav}
              handleNav={(e) => {
                setActiveNav(e.target.innerText);
              }}
            />

            {getActiveTabSection()}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
