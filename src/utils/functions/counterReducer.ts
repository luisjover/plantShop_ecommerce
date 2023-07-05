import { CounterActions } from "../../types/types";


export function counterReducer(state: { counter: number }, action: CounterActions) {
    switch (action.type) {
        case "increase":
            return {
                ...state,
                counter: state.counter + 1
            }

        case "decrease":
            if (state.counter > 0) {
                return {
                    ...state,
                    counter: state.counter - 1
                }
            } else return state

        case "reset":
            return {
                ...state,
                counter: 0
            }


        default: return state;

    }
}