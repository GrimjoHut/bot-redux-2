import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import RandomArrows from "./Components/RandomArrows"
import WelcomeText from "./Components/WelcomeText"


export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = props => {
  const {isTimerActive} = props

  const state = useAppSelector(state => state.playground)


  return (
    <div>
      <h3>Random Keys</h3>

      {state.steps.length === 0 ? (<WelcomeText isTimerActive={isTimerActive}/>) :(
       <RandomArrows />
      )}
    </div>
  )
}

export default RandomKeys
