import "./Controls.css"
import LockPick from "./../../Resources/Images/LockpickButton.png"
import { useState } from "react"

export interface IControlsProps {
    isTimerActive: boolean,
    setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = (props) => {
    const [isShowLockpick, setIsShowLockpick] = useState<boolean>(true)
    const { isTimerActive, setIsTimerActive} = props
    const HandleLockpick = () => {
        setIsTimerActive(true)
        setIsShowLockpick(false)
    }

    return <>
    <span className={isShowLockpick? "ControlsContainerSpan" : "ControlsContainerSpanHidden"}>There are some tools,<br></br>that can help you</span>
    <div className={isShowLockpick? "ControlsContainer" : "ControlsContainerHidden" }>
        <img className="Lockpick" src={LockPick} onClick={HandleLockpick}></img>
    </div>
    <div className={isShowLockpick? "MotivationwWordsHidden" : "MotivationwWords"}>
        
    </div>
    </>
}

export default Controls
