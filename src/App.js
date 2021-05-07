import './App.css';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import CompetencyCounter from './components/CompetencyCounter';
import JobFunctions from './components/JobFunctions';
import Achievements from './components/Achievements';
import Goals from './components/Goals';

function App() {
  const initialState =
    JSON.parse(window.localStorage.getItem('performeter')) || {};

  const [jobFunctions, setJobFunctions] = useState(
    initialState.jobFunctions || []
  );
  const [achievements, setAchievements] = useState(
    initialState.achievements || ''
  );
  const [goals, setGoals] = useState(initialState.goals || []);
  const [activeNav, setActiveNav] = useState('Job Functions');

  useEffect(() => {
    const data = {
      jobFunctions,
      achievements,
      goals,
    };
    window.localStorage.setItem('performeter', JSON.stringify(data));
  }, [jobFunctions, achievements, goals]); // only activate when these values change

  const addComment = (jobFunctionId) => {
    const newJobFunctions = jobFunctions.map((jobFunction) => {
      if (jobFunction.id === jobFunctionId) {
        const newComments = [
          ...jobFunction.comments,
          {
            competency: '',
            indicator: '',
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

  const addJobFunction = () => {
    setJobFunctions([
      ...jobFunctions,
      {
        id: `job-function-${Math.random().toString(16).slice(2)}`,
        description: '',
        percentage: '',
        comments: [
          {
            competency: '',
            indicator: '',
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
  const updateAchievements = (event) => {
    setAchievements(event.target.value);
  };

  // Goals Handlers
  const addGoal = () => {
    const newGoalIndex = goals.length + 1;
    const newGoal = {
      title: `Goal ${newGoalIndex}`,
      value: '',
    };
    setGoals((prevState) => [...prevState, newGoal]);
  };

  const updateGoal = (event, index) => {
    const updatedGoals = goals.map((goal, goalIndex) => {
      if (goalIndex === index) {
        return { ...goal, value: event.target.value };
      }

      return goal;
    });

    setGoals(() => updatedGoals);
  };

  const resetData = () => {
    setJobFunctions([]);
    setAchievements('');
    setGoals([]);
  };

  const allComments = jobFunctions
    .map((jobFunction) => jobFunction.comments)
    .flat();

  return (
    <div className="App">
      <Header state={jobFunctions} resetData={resetData} />
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

            {
              {
                'Job Functions': (
                  <JobFunctions
                    jobFunctions={jobFunctions}
                    addJobFunction={addJobFunction}
                    addComment={addComment}
                    updateJobFunction={updateJobFunction}
                    updateComment={updateComment}
                    deleteComment={deleteComment}
                  />
                ),
                Achievements: (
                  <Achievements
                    achievements={achievements}
                    updateAchievements={updateAchievements}
                  />
                ),
                'Future Goals': (
                  <Goals
                    goals={goals}
                    addGoal={addGoal}
                    updateGoal={updateGoal}
                  />
                ),
              }[activeNav]
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
