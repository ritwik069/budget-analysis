import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// initial state

const inititalState = {
    transaction: [
        { id: 1, text: "Flower", amount: -20 },
        { id: 2, text: "Flower", amount: -200 },
        { id: 3, text: "sunflower", amount: 20 },
        { id: 4, text: "apple", amount: 5520 },
    ]
}
//create context

export const GlobalContext = createContext([inititalState]);

//provider
//children is props
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, inititalState);
    // action 
    function deleteTrans(id) {
        dispatch({
            type: 'DELETE_TRANS',
            payload: id
        });
    }
    function AddTranss(transaction) {
        dispatch({
            type: 'ADD_TRANS',
            payload: transaction
        });
    }


    return (<GlobalContext.Provider value={{ transaction: state.transaction ,
            deleteTrans,
            AddTranss
            }}>
        {children}
    </GlobalContext.Provider>);
}


