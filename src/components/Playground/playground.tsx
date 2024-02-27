import { useState, useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices"
import Controls from "./components/Controls/Controls"
import RandomKeys from "./components/RandomKeys/RandomKeys"
import KeyPressed from "./components/KeyPressed"
import Score from "./components/Score/Score"
import Modal from "./components/Modal"

import { INTERVAL_TIME, END_GAME_CONDITIONS } from "./Constants"

const Playground: React.FC = () => {
  const state = useAppSelector(state => state.playground)
  const dispatch = useAppDispatch()

  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false)
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnsuccess())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }

    return () => {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }
  }, [isTimerActive, dispatch])

  useEffect(() => {
   const isSuccessful = 
   state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT
   const isUnSuccessful = 
   state.totalUnSuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT

   isSuccessful && setIsSuccessEndGame(true)
   isUnSuccessful && setIsSuccessEndGame(false)

 if (isSuccessful || isUnSuccessful){
  setIsShowModal(true)
  setIsTimerActive(false)
 }

  }, [state.totalSuccessful, state.totalUnSuccessful])

  return (
    <div>
      {state.currentStep}
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
      <Score />
      {isShowModal && <Modal />}
    </div>
  )
}

export default Playground
