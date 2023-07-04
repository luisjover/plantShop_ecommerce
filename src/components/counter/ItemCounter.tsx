
import { ButtonAction } from "../../types/types"


export const ItemCounter = ({ ...props }) => {


    // function handleBuy() {
    //     props.handlePurchase(props.selectedId)
    // }

    const buttons: ButtonAction[] = [
        // { label: "BuyProduct", id: "1", action: handleBuy, display: "Buy now" },
        { label: "Increment", id: "2", action: () => props.dispatch({ type: "increase" }), display: "+" },
        { label: "Decrement", id: "3", action: () => props.dispatch({ type: "decrease" }), display: "-" },
        { label: "ResetValue", id: "4", action: () => props.dispatch({ type: "reset" }), display: "C" },
    ];


    return (
        <>
            <div>{props.counter.counter}</div>
            {buttons.map((button) => (
                <button
                    key={button.id}
                    className="btn-counter"
                    onClick={button.action}
                // disabled={button.id === "1" && props.counter.counter === 0}
                >
                    {button.display}
                </button>
            ))}
        </>
    );
};