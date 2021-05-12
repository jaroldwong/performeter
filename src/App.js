import './App.css';

import React, { useState, useEffect, useReducer, useContext } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import CompetencyCounter from './components/CompetencyCounter';
import JobFunctions from './components/JobFunctions';
import Achievements from './components/Achievements';
import Goals from './components/Goals';

import jobFunctionReducer from './reducers/jobFunctionReducer';
import { AppContext } from './contexts/AppContext';

function App() {
  const initialState =
    JSON.parse(window.localStorage.getItem('performeter')) || {};

  const { appState, appDispatch } = useContext(AppContext);

  const [state, dispatch] = useReducer(
    jobFunctionReducer,
    initialState.jobFunctions || []
  );

  const [achievements, setAchievements] = useState(
    initialState.achievements || ''
  );
  const [goals, setGoals] = useState(initialState.goals || []);

  useEffect(() => {
    const data = {
      jobFunctions: state,
      achievements,
      goals,
    };
    window.localStorage.setItem('performeter', JSON.stringify(data));
  }, [state, achievements, goals]); // only activate when these values change

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

  const updateNav = (e) => {
    appDispatch({ type: 'SELECT_TAB', payload: { tab: e.target.innerText } });
  };

  const resetData = () => {
    dispatch({ type: 'RESET_JOB_FUNCTIONS' });
    setAchievements('');
    setGoals([]);
    appDispatch({ type: 'RESET_ACTIVE_TAB' });
  };

  const allComments = state.map((jobFunction) => jobFunction.comments).flat();

  return (
    <div className="App">
      <Header
        state={state}
        achievements={achievements}
        goals={goals}
        resetData={resetData}
      />
      <section className="section">
        <div className="columns">
          <div className="column is-one-quarter">
            <CompetencyCounter comments={allComments} />
          </div>
          <div className="column is-three-quarters">
            <Tabs activeTab={appState.activeTab} updateNav={updateNav} />

            {
              {
                'Job Functions': (
                  <JobFunctions
                    jobFunctions={state}
                    addJobFunction={() =>
                      dispatch({ type: 'ADD_JOB_FUNCTION' })
                    }
                    updateJobFunction={(id, event) =>
                      dispatch({
                        type: 'UPDATE_JOB_FUNCTION',
                        payload: { id, event },
                      })
                    }
                    addComment={(id) =>
                      dispatch({ type: 'ADD_COMMENT', payload: { id } })
                    }
                    updateComment={(
                      jobFunctionId,
                      commentIndex,
                      newComment
                    ) => {
                      dispatch({
                        type: 'UPDATE_COMMENT',
                        payload: { jobFunctionId, commentIndex, newComment },
                      });
                    }}
                    deleteComment={(jobFunction, commentIndex) =>
                      dispatch({
                        type: 'DELETE_COMMENT',
                        payload: { jobFunction, commentIndex },
                      })
                    }
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
              }[appState.activeTab]
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
