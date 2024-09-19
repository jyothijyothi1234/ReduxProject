import React from "react";
import { createStore } from "redux";

const initialState = {
  fullname: "null",
  balance: 0,
  mobile : "null",
};

 function Reduxter(state = initialState, action) {

    
        switch (action.type) {

            case "balance":
              return { ...state, balance: state.balance +  + action.payload };
              case "withdraw":
                return { ...state, balance: state.balance -  + action.payload };
              case "mobile":
              return { ...state,  mobile:  action.payload };
              case "fullname":
              return { ...state, fullname: action.payload };
              case "reset":
                return 0;
            default:
              return state;
          }
    
  
}

const store = createStore(Reduxter);


store.dispatch({type:"balance" ,payload: 10})

store.dispatch({type:"mobile" ,payload: 101236544})

console.log(store.getState());


export default  store;
