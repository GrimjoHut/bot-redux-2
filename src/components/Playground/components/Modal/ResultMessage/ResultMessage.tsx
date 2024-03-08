// import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = props => {
  const { isSuccessEndGame } = props

  return isSuccessEndGame ? (<span>NICE!, ISRAEL HAD LOST SOME GOLD</span>) : (<span>OH NO, THEY ARE HERE</span>)
}

export default ResultMessage
