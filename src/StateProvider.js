//setup data layer
// we  need this to track the basket
import React,{createContext,useContext,useReducer} from "react";

//Prepare the dataLayer or we can say this the data layer
export const StateContext =createContext();

//wrap our app and provide dataLayer to all the component
export const StateProvider =({reducer, initialState,children})  => (
    <StateContext.StateProvider value={useReducer(reducer,initialState,children)}>
        {children}
        </StateContext.StateProvider>
);

//Pull information from the data Layer
export const useStateValue = () => useContext(StateContext);