import './App.css';

import React, { useState, useEffect, useReducer, useContext } from 'react';
import Header from './components/Header';
import SectionTabs from './components/SectionTabs';
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
    const newGoal = {
      id: new Date().getTime(),
      title: `Goal ${goals.length + 1}`,
      value: '',
    };
    setGoals((prevState) => [...prevState, newGoal]);
  };

  const updateGoal = (newGoal) => {
    const newGoals = goals.map((goal) =>
      goal.id === newGoal.id ? newGoal : goal
    );

    setGoals(() => newGoals);
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
            <SectionTabs activeTab={appState.activeTab} updateNav={updateNav} />

            {
              {
                'Job Functions': (
                  <JobFunctions jobFunctions={state} dispatch={dispatch} />
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
