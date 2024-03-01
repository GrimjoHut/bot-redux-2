import "./DropDownList.css";
import { IStateDifficultyLevel } from "../../store/types";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { setDifficultyLevel } from "../../store/slices";

const DropDownList: React.FC = () => {
  
  const state = useAppSelector(state => state.playground)
  const dispatch = useAppDispatch()

  return (
    <ul className="DropDownListMenu">
      <li>
        <a>{state.isDifficultyLevel}</a>
        <ul>
          <li>
            <a onClick={() => dispatch(setDifficultyLevel(IStateDifficultyLevel.easy))}>Просто</a>
          </li>
          <li>
            <a onClick={() => dispatch(setDifficultyLevel(IStateDifficultyLevel.middle))}>Средне</a>
          </li>
          <li>
            <a onClick={() => dispatch(setDifficultyLevel(IStateDifficultyLevel.hard))}>Сложно</a>
          </li>
          <li>
            <a onClick={() => dispatch(setDifficultyLevel(IStateDifficultyLevel.impossible))}>Невозможно</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default DropDownList;