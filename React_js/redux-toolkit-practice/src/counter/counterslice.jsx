import { createSlice } from "@reduxjs/toolkit";


export const counterslice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },    
    reducers:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        },
        reset:(state)=>{
            state.count=0;
        }

    }
})
export default counterslice.reducer;
export const{increment,decrement,reset}=counterslice.actions