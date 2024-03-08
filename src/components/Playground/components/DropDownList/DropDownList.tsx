import "./DropDownList.css";
import { IStateDifficultyLevel } from "../../store/types";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { setDifficultyLevel } from "../../store/slices";
import ChooseSound from "./../../Resources/Sounds/ChooseSound.mp3";

export interface IDropDownProps {
  isTimerActive:boolean
}

const DropDownList: React.FC<IDropDownProps> = (props) => {
  const {isTimerActive} = props
  const state = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();
  const chooseSound = new Audio(ChooseSound);

  const handleDifficultyLevelClick = (difficultyLevel: IStateDifficultyLevel) => {
    dispatch(setDifficultyLevel(difficultyLevel));
    chooseSound.play(); 
  };

  return (
    <ul className={!isTimerActive? "DropDownListMenu" : "HiddenDropDownListMenu"}>
      <li>
        <a>{state.isDifficultyLevel}</a>
        <ul>
          <li>
            <a onClick={() => handleDifficultyLevelClick(IStateDifficultyLevel.easy)}>Easy</a>
          </li>
          <li>
            <a onClick={() => handleDifficultyLevelClick(IStateDifficultyLevel.middle)}>Middle</a>
          </li>
          <li>
            <a onClick={() => handleDifficultyLevelClick(IStateDifficultyLevel.hard)}>Hard</a>
          </li>
          <li>
            <a onClick={() => handleDifficultyLevelClick(IStateDifficultyLevel.impossible)}>Impossible</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default DropDownList;