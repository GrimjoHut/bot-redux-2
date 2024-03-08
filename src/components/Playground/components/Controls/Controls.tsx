import "./Controls.css"
import LockPick from "./../../Resources/Images/LockpickButton.png"
import Jewish from "./../../Resources/Images/Jewish.png"

export interface IControlsProps {
    isTimerActive: boolean,
    setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>,
    isShowLockpick: boolean,
    setIsShowLockpick: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = (props) => {
    const { isTimerActive, setIsTimerActive, isShowLockpick, setIsShowLockpick} = props
    const HandleLockpick = () => {
        setIsTimerActive(true)
        setIsShowLockpick(false)
    }

    return <>
    <span className={isShowLockpick? "ControlsContainerSpan" : "ControlsContainerSpanHidden"}>There are some tools,<br></br>that can help you</span>
    <div className={isShowLockpick? "ControlsContainer" : "ControlsContainerHidden" }>
        <img className="Lockpick" src={LockPick} onClick={HandleLockpick}></img>
    </div>
    <div className={isShowLockpick? "MotivationWordsHidden" : "MotivationWords"}>
     <span> Oh god, jews are nearby,<br></br> you must be hurry </span>
     <br></br>
     <img src={Jewish}></img>
    </div>
    </>
}

export default Controls
