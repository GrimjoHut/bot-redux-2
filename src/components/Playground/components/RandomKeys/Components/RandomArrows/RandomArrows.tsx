import styles from "./RandomArrows.module.css"
import { useAppSelector } from "../../../../../../app/hooks"
import { IPLaygroundStepsState } from "../../../../store/types"
import { MAP_ARROW_CODES } from "../../../../Constants"
import { IMapArrowCodes } from "../../../types"


const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground);

  const getStylesRandomKeys = (element: IPLaygroundStepsState): string => {
      if (element.success !== null && element.success) {
          return styles.iconSuccess;
      }
      if (element.success !== null && !element.success) {
          return styles.iconUnSuccess;
      }
      return styles.icon;
  };

  return (
      <div>
          {state.steps.slice(Math.max(state.steps.length - 3, 0)).map((element) => (
              <span key={element.step} className={getStylesRandomKeys(element)}>
                  {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
              </span>
          ))}
      </div>
  );
};

export default RandomArrows;

