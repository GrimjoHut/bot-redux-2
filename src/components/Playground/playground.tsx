import { useState, useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices"
import Controls from "./components/Controls/Controls"
import RandomKeys from "./components/RandomKeys/RandomKeys"
import KeyPressed from "./components/KeyPressed"
import Score from "./components/Score/Score"
import Modal from "./components/Modal"
import Header from "./components/Header/Header"
import "./Playground.css"

import { IStateDifficultyLevel } from "./store/types"
import { END_GAME_CONDITIONS } from "./Constants"
import DropDownList from "./components/DropDownList/DropDownList"
import BackgroundMusicPlayground from "./Resources/Sounds/BackgroundMusicPlayground.mp3"
import OpenedChestSound from "./Resources/Sounds/OpenedChestSound.mp3"
import LostGameSound from "./Resources/Sounds/LostGameSound.mp3"
import Title from "./components/Title/Title"

const Playground: React.FC = () => {
  const state = useAppSelector(state => state.playground)
  const dispatch = useAppDispatch()
  const BackGroundMusic = new Audio(BackgroundMusicPlayground)
  BackGroundMusic.volume = 0.7
  const OpenedChest = new Audio(OpenedChestSound)
  const LockedChest = new Audio(LostGameSound)

  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false)
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const [INTERVAL_TIME, setINTERVAL_TIME] = useState<number>(1000)
  const [isShowLockpick, setIsShowLockpick] = useState<boolean>(true)

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    switch (state.isDifficultyLevel) {
      case IStateDifficultyLevel.easy:
        setINTERVAL_TIME(900)
        break
      case IStateDifficultyLevel.middle:
        setINTERVAL_TIME(750)
        break
      case IStateDifficultyLevel.hard:
        setINTERVAL_TIME(500)
        break
      case IStateDifficultyLevel.impossible:
        setINTERVAL_TIME(150)
        break
      default:
        setINTERVAL_TIME(1000)
    }
    console.log(INTERVAL_TIME)
  }, [state.isDifficultyLevel])

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnsuccess())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
      BackGroundMusic.play()
    } else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }

    return () => {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
      BackGroundMusic.pause()
    }
  }, [isTimerActive, INTERVAL_TIME])

  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT
    const isUnSuccessful =
      state.totalUnSuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT

    isSuccessful && setIsSuccessEndGame(true)
    isUnSuccessful && setIsSuccessEndGame(false)
    if (isSuccessful) {
      setIsShowModal(true)
      setIsTimerActive(false)
      OpenedChest.play()
    }
    if (isUnSuccessful) {
      setIsShowModal(true)
      setIsTimerActive(false)
      LockedChest.play()
    }
  }, [state.totalSuccessful, state.totalUnSuccessful])

  return (
    <body
      className={
        isSuccessEndGame ? "BackgroundImageOpened" : "BackgroundImageLocked"
      }
    >
      <Title isTimerActive={isTimerActive}/>
      <Header isTimerActive={isTimerActive}/>
      <DropDownList isTimerActive={isTimerActive}/>
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
        isShowLockpick={isShowLockpick}
        setIsShowLockpick={setIsShowLockpick}
      />
      <KeyPressed isTimerActive={isTimerActive} />
      <RandomKeys isTimerActive={isTimerActive} />
      <Score />
      <Modal
        isShowLockpick={isShowLockpick}
        setIsShowLockpick={setIsShowLockpick}
        setIsShowModal={setIsShowModal}
        isSuccessEndGame={isSuccessEndGame}
        isShowModal={isShowModal}
        setIsSuccessEndGame={setIsSuccessEndGame}
      />
    </body>
  )
}

export default Playground
