// import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = props => {
  const { isSuccessEndGame } = props

  return isSuccessEndGame ? (<span>You won</span>) : (<span>Yoo lost</span>)
}

export default ResultMessage
