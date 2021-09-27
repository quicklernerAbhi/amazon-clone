import React, { createContext, useContext, useReducer } from "react";

// prepares dataLayer
export const StateContext = createContext();

// Wrap our App and provide the data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from the datalayer
export const useStateValue = () => useContext(StateContext);
