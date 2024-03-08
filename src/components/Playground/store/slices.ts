import { createSlice } from "@reduxjs/toolkit"

import { ARR_ARROW_CODES } from "../Constants"
import { IPLaygroundState } from "./types"
import { IStateDifficultyLevel } from "./types"

export const initialState: IPLaygroundState = {
  currentStep: 0,
  steps: [],
  totalSuccessful: 0,
  totalUnSuccessful: 0,
  isDifficultyLevel: IStateDifficultyLevel.easy,
}

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: state => {
      state.currentStep += 1
    },

    setDifficultyLevel: (state, action) => {
      state.isDifficultyLevel = action.payload
      console.log(action.payload)
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

        if (isSuccess) {
          state.totalSuccessful += 1
        } else {
          state.totalUnSuccessful += 1
          state.totalSuccessful = 0
        }
      }
    }
    },
    setUnsuccess: state => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]

        if (step.enteredValue === null) {
          state.totalUnSuccessful += 1
          state.totalSuccessful = 0

          state.steps[state.currentStep - 1] = {
            ...step,
            success: false,
          }
        }
      }
    },
    resetStore: () => initialState,
  },
})

export const { setCurrentStep, setSteps, setEnteredValue, setUnsuccess, resetStore, setDifficultyLevel } =
  playgroundSlice.actions
export default playgroundSlice.reducer
