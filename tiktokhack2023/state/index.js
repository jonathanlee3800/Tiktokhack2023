//This is the Jotai store. Use this as your multi-component/global state management instead of React Context or Redux

import {atom} from "jotai";

//Login state
export const loginAtom = atom(false);