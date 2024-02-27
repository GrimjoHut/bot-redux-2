import styles from "./RandomArrows.module.css"
import { useAppSelector } from "../../../../../../app/hooks"
import { IPLaygroundStepsState } from "../../../../store/types"
import { MAP_ARROW_CODES } from "../../../../Constants"
import { IMapArrowCodes } from "../../../types"


const RandomArrows: React.FC = () => {

    const state = useAppSelector(state => state.playground)

    const getStylesRandomKeys = (element: IPLaygroundStepsState): string =>{
        if (element.success && element.success !==null){
         return styles.iconSuccess
        }
        if (!element.success && element.success !==null){
         return styles.iconUnSuccess
        }
   
        return styles.icon
     } 
   

    return (
    <>
    {state.steps.map((element) => (
    <span key={element.step} className={getStylesRandomKeys(element)}>{MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}</span>
  ))}
    </>
    )
}

export default RandomArrows
