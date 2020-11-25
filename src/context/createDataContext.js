import React, { createContext, useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Context = createContext();

  let boundActions = {};
  for (let key in actions) {
    boundActions[key] = actions[key](dispatch);
  }

  const Provider = ({ children }) => {
    return (
      <Context.Provider value = {{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  
  return { Context, Provider };
};