import "./Header.css"

export interface IHeaderProps {
    isTimerActive:boolean
}

const Header: React.FC<IHeaderProps> = (props) => {
    const {isTimerActive} = props

    return (
    <div>
    <span className={!isTimerActive? "Header" : "HeaderHidden"}>Hmm, this chest looks pretty interesting</span>
    <span className={!isTimerActive? "WarningHeaderHidden" : "WarningHeader"}>FASTER FASTER!!!!</span>
    </div>
    )
}

export default Header
