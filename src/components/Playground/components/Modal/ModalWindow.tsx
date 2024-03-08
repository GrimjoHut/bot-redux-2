import"./ModalWindow.css"

import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./ResultMessage/ResultMessage"

export interface IModalProps {
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
    isSuccessEndGame: boolean
    isShowModal: boolean
    setIsSuccessEndGame:React.Dispatch<React.SetStateAction<boolean>>
    isShowLockpick: boolean,
    setIsShowLockpick: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<IModalProps> = (props) => {
    const {setIsShowModal, isSuccessEndGame, isShowModal, setIsSuccessEndGame, isShowLockpick, setIsShowLockpick} = props

    const dispatch = useAppDispatch()

    const handleClose = () => {
        setIsShowModal(false)
        setIsSuccessEndGame(false)
        setIsShowLockpick(true)
        dispatch(resetStore())
    }

    return <div className={isShowModal? "modalWindow active" : "modalWindow"}>
        <div className={isShowModal? "modalWindowContent active" : "modalWindowContent"}>
        <ResultMessage isSuccessEndGame ={isSuccessEndGame} />
        <button onClick={handleClose}>Start New Game</button>
        </div>
    </div>
}

export default Modal
