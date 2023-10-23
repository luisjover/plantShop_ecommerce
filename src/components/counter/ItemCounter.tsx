
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./itemCounter.css"

export const ItemCounter = ({ ...props }) => {


    return (

        <div className="counter-container">
            <AiOutlinePlus className="btn-counter-icon" onClick={() => props.dispatch({ type: "increase" })} />
            <span className="counter-display">{props.counter}</span>
            <AiOutlineMinus className="btn-counter-icon" onClick={() => props.dispatch({ type: "decrease" })} />

        </div>

    );
};