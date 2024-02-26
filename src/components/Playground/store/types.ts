export interface IPLaygroundStepsState{
    currentValue: string
}

export interface IPLaygroundState {
    currentStep: number,
    steps: IPLaygroundStepsState[]
}