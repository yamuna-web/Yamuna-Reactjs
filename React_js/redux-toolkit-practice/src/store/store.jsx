import { configureStore } from "@reduxjs/toolkit";
import counterslice  from "../counter/counterslice";
import counter from "../counter/counter";
export const store=configureStore({
  reducer:{
    counter:counterslice
  }, 
})