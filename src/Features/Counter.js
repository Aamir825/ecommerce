import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 1,
    reducers: {
        increment: (state)=> state + 1, 
        decrement: (state)=> {
            if(state > 1){
                return state - 1
            }
            return state 
        },
    }
})

export const {increment , decrement} = counterSlice.actions
export default counterSlice.reducer