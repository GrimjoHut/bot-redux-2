import { createSlice } from "@reduxjs/toolkit"

import { ARR_ARROW_CODES } from "../Constants"
import { IPLaygroundState } from "./types"

export const initialState: IPLaygroundState = {
  currentStep: 0,
  steps: [],
  totalSuccessfull: 0,
  totalUnSuccessfull: 0,
}

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: state => {
      state.currentStep += 1
    },

    setSteps: state => {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW_CODES.length)

      state.steps.push({
        step: state.currentStep,
        currentValue: ARR_ARROW_CODES[randomKeys],
        enteredValue: null,
        success: null,
      })
    },
    setEnteredValue: (state, action) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]
        const isSuccess = step.currentValue === action.payload

        if (step.enteredValue === null) {
          state.steps[state.currentStep - 1] = {
            ...step,
            enteredValue: action.payload,
            success: isSuccess,
          }
        }

        if (isSuccess) {
          state.totalSuccessfull += 1
        } else {
          state.totalUnSuccessfull += 1
          state.totalSuccessfull = 0
        }
      }
    },
    setUnsuccess: state => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]

        if (step.enteredValue == null) {
          state.totalUnSuccessfull += 1
          state.totalSuccessfull = 0
          
          state.steps[state.currentStep - 1] = {
            ...step,
            success: false,
          }
        }
      }
    },
  },
})

export const { setCurrentStep, setSteps, setEnteredValue, setUnsuccess } =
  playgroundSlice.actions
export default playgroundSlice.reducer
