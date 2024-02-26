import { createSlice } from "@reduxjs/toolkit";

import { ARR_ARROW_CODES } from "../Constants";
import { IPLaygroundState } from "./types";


export const initialState: IPLaygroundState = {
    currentStep: 0,
    steps: []
}

export const playgroundSlice = createSlice({
    name: "playground",
    initialState,
    reducers: {
        setCurrentStep: (state) =>{
            state.currentStep += 1
        },

        setSteps: (state) => {
         const randomKeys = Math.floor(Math.random() * ARR_ARROW_CODES.length)
         console.log(ARR_ARROW_CODES[randomKeys])
        }
    },
})

export const {setCurrentStep, setSteps} = playgroundSlice.actions
export default playgroundSlice.reducer

