//State context - allows to wrap our app into data layer,
//we can push information into, and pull info from it
import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();


//Children - is our entire app, wrapped into <StateContext.Provider>
// to push user into this data layer, and be able to pull him/her
//from anywhere in our app

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer (reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
