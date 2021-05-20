import React, { createContext, useEffect, useReducer } from 'react';

export const AppContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_TAB':
      return { ...state, activeTab: action.payload.tab };
    case 'RESET_ACTIVE_TAB':
      return { activeTab: 'Job Functions' };
    default:
      return state;
  }
}

const AppContextProvider = (props) => {
  const [appState, appDispatch] = useReducer(reducer, {}, () => {
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
