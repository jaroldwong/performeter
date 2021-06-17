import React, { createContext, useEffect, useReducer } from 'react';
import appReducer from '../reducers/appReducer';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, {}, () => {
    const localData = localStorage.getItem('performeter-app-state');
    return localData ? JSON.parse(localData) : { activeTab: 'Job Functions' };
  });

  useEffect(() => {
    localStorage.setItem('performeter-app-state', JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
