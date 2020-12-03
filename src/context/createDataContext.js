import React, { createContext, useReducer } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducer, actions, initialState) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    let boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value = {{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  
  return { Context, Provider };
};