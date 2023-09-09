//This is the Jotai store. Use this as your multi-component/global state management instead of React Context or Redux

import {atom} from "jotai";

//Login state
export const loginAtom = atom(false);


/*
-----Group Purchase Modal------
*/ 
export const purchaseButton = atom(false);
export const friendListAtom = atom([
    { id: 1, name: 'User 1', amount: 0 },
    { id: 2, name: 'User 2', amount: 0  },
    { id: 3, name: 'User 3', amount: 0  },
    { id: 4, name: "john doe", amount: 0 },
    { id: 5, name: "big bunda", amount: 0 }
  ]);