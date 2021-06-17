import './App.css';

import React, { useState, useEffect, useReducer, useContext } from 'react';
import Header from './components/Header';
import SectionTabs from './components/SectionTabs';
import CompetencyCounter from './components/CompetencyCounter';
import JobFunctions from './components/JobFunctions';
import Achievements from './components/Achievements';
import Goals from './components/Goals';

import jobFunctionReducer from './reducers/jobFunctionReducer';
import { GlobalContext } from './contexts/GlobalContext';

function App() {
  const initialState =
    JSON.parse(window.localStorage.getItem('performeter')) || {};

  const globalStore = {
    state: useContext(GlobalContext).state,
    dispatch: useContext(GlobalContext).dispatch,
  };

  const [state, dispatch] = useReducer(
    jobFunctionReducer,
    initialState.jobFunctions || []
  );

  const [achievements, setAchievements] = useState(
    initialState.achievements || ''
  );
  const [goals, setGoals] = useState(initialState.goals || []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/posts');

      // await only works inside async function
      const data = await response.json();

      console.log(data);
    };

    fetchData();

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
    globalStore.dispatch({
      type: 'SELECT_TAB',
      payload: { tab: e.target.innerText },
    });
  };

  const resetData = () => {
    dispatch({ type: 'RESET_JOB_FUNCTIONS' });
    setAchievements('');
    setGoals([]);
    globalStore.dispatch({ type: 'RESET_ACTIVE_TAB' });
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
            <SectionTabs
              activeTab={globalStore.state.activeTab}
              updateNav={updateNav}
            />

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
              }[globalStore.state.activeTab]
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
