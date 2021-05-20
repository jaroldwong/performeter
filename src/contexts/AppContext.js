import React, { createContext, useEffect, useReducer } from 'react';
import appReducer from '../reducers/appReducer';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [appState, appDispatch] = useReducer(appReducer, {}, () => {
    const localData = localStorage.getItem('performeter-app-state');
    return localData ? JSON.parse(localData) : { activeTab: 'Job Functions' };
  });

  useEffect(() => {
    localStorage.setItem('performeter-app-state', JSON.stringify(appState));
  }, [appState]);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
