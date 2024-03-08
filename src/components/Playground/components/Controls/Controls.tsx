import "./Controls.css"
import LockPick from "./../../Resources/Images/LockpickButton.png"
import Jewish from "./../../Resources/Images/Jewish.png"
import JewishLaughSound from "./../../Resources/Sounds/JewishLaughSound.mp3"
import StartButtonSound from "./../../Resources/Sounds/StartButtonSound.mp3"

export interface IControlsProps {
    isTimerActive: boolean,
    setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>,
    isShowLockpick: boolean,
    setIsShowLockpick: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = (props) => {
    const StartSound = new Audio(StartButtonSound)
    const JewishSound = new Audio (JewishLaughSound)
    const { isTimerActive, setIsTimerActive, isShowLockpick, setIsShowLockpick} = props
    const HandleLockpick = () => {
        setIsTimerActive(true)
        setIsShowLockpick(false)
        StartSound.play()
    }
    const HandleJewish = () => {
        JewishSound.play()
    }

    return <>
    <span className={isShowLockpick? "ControlsContainerSpan" : "ControlsContainerSpanHidden"}>There are some tools,<br></br>that can help you</span>
    <div className={isShowLockpick? "ControlsContainer" : "ControlsContainerHidden" }>
        <img className="Lockpick" src={LockPick} onClick={HandleLockpick}></img>
    </div>
    <div className={isShowLockpick? "MotivationWordsHidden" : "MotivationWords"}>
     <span> Oh god, jews are nearby,<br></br> you must be hurry </span>
     <br></br>
     <img src={Jewish} onClick={HandleJewish}></img>
    </div>
    </>
}

export default Controls
