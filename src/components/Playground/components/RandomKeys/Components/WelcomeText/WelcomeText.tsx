// import styles from "./WelcomeText.module.css"
import loader from "./loader.svg"

export interface IWelcomeTextProps {
    isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = (props) => {
    const {isTimerActive} = props

    if (isTimerActive){
        return <span><img src={loader} ></img></span>
    }

    return <span>Hello</span>
}

export default WelcomeText
