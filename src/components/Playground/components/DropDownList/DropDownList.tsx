import "./DropDownList.css";
import { IStateDifficultyLevel } from "../../store/types";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { setDifficultyLevel } from "../../store/slices";
import ChooseSound from "./../../Resources/Sounds/ChooseSound.mp3";

const DropDownList: React.FC = () => {
  const state = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();
  const chooseSound = new Audio(ChooseSound);

  const handleDifficultyLevelClick = (difficultyLevel: IStateDifficultyLevel) => {
    dispatch(setDifficultyLevel(difficultyLevel));
    chooseSound.play(); 
  };

  return (
    <ul className="DropDownListMenu">
      <li>
        <a>{state.isDifficultyLevel}</a>
        <ul>
          <li>
            <a onClick={() => handleDifficultyLevelClick(IStateDifficultyLevel.easy)}>Просто</a>
          </li>
          <li>
            <a onClick={() => handleDifficultyLevelClick(IStateDifficultyLevel.middle)}>Средне</a>
          </li>
          <li>
            <a onClick={() => handleDifficultyLevelClick(IStateDifficultyLevel.hard)}>Сложно</a>
          </li>
          <li>
            <a onClick={() => handleDifficultyLevelClick(IStateDifficultyLevel.impossible)}>Невозможно</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default DropDownList;