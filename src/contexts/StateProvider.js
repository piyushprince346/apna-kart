import React, { createContext, useContext, useReducer } from 'react'

// the datalayer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// fetch information from the data layer
export const useStateValue = () => useContext(StateContext);
