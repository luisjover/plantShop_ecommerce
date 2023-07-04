import { CounterActions } from "../../types/types";


export function counterReducer(state: { counter: number }, action: CounterActions) {
    switch (action.type) {
        case "increase":
            return {
                ...state,
                counter: state.counter + 1
            }

        case "decrease":
            return {
                ...state,
                counter: state.counter - 1
            }

        case "reset":
            return {
                ...state,
                counter: 0
            }


        default: return state;

    }
}