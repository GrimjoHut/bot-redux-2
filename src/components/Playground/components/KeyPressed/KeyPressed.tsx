import { useEffect, useCallback } from "react"
import { MAP_ARROW_CODES } from "../../Constants"
import { setEnteredValue } from "../../store/slices"
import { useAppDispatch } from "../../../../app/hooks"
import { useKeyPressedElement } from "./hooks"
import LockPickSound from "../../Resources/Sounds/LockPickSound.mp3"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = props => {
  const { isTimerActive } = props
  const LockPickAudio = new Audio(LockPickSound)

  const KeyPressedElement = useKeyPressedElement()

  const dispatch = useAppDispatch()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (MAP_ARROW_CODES.hasOwnProperty(e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key))
        LockPickAudio.play()
      }
    },
    [dispatch, isTimerActive, LockPickAudio],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div>
      <h3>KeyPressed</h3>
      <span>{KeyPressedElement}</span>
    </div>
  )
}

export default KeyPressed
