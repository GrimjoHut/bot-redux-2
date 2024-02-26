// import styles from "./RandomKeys.module.css"

import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setSteps } from "../../store/slices"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = props => {
  // const {isTimerActive} = props

  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={() => dispatch(setSteps())}>Click</button>
    </div>
  )
}

export default RandomKeys
