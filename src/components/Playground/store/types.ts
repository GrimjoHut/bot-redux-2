export interface IPLaygroundStepsState {
  step: number
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
}

export interface IPLaygroundState {
  currentStep: number
  steps: IPLaygroundStepsState[]
  totalSuccessful: number
  totalUnSuccessful: number
}
