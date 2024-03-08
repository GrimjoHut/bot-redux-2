import "./Title.css"

export interface ITitleProps {
  isTimerActive:boolean
}

const Title: React.FC<ITitleProps> = (props) => {
    const {isTimerActive} = props

    return (
     <>
    <div className={isTimerActive? "TitleHidden" : "Title"}>What do these buttons <br></br> on the chest do?</div>
    <div className={!isTimerActive? "WarningTitleHidden" : "WarningTitle"}>They are so close!! <br></br> They are so clouse!!</div>
    </>
    )
}

export default Title
