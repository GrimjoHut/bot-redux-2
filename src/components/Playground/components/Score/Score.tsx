import "./Score.css";
import { useAppSelector } from "../../../../app/hooks";

const Score: React.FC = () => {
    const state = useAppSelector(state => state.playground);

    return (
        <div className="ScoreContainer">
            <span className="Error">Errors: {state.totalUnSuccessful}</span>
            <span className="Success">Succesful: {state.totalSuccessful}</span>
        </div>
    );
}

export default Score;
