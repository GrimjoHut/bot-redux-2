// import styles from "./KeyPressed.module.css"

import { useEffect, useCallback } from "react"
import { MAP_ARROW_CODES } from "../../Constants"
import { setEnteredValue } from "../../store/slices"
import { useAppDispatch } from "../../../../app/hooks"
import { useKeyPressedElement } from "./hooks"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = props => {
  const { isTimerActive } = props

  const KeyPressedElement = useKeyPressedElement()

  const dispatch = useAppDispatch()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (MAP_ARROW_CODES.hasOwnProperty(e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key))
      }
    },
    [dispatch, isTimerActive],
  )


  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <div>
      <h3>KeyPressed</h3>
      <span>{KeyPressedElement}</span>
    </div>
  )
}

export default KeyPressed










