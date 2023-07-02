import { UserActions } from "../types/types"


export const userReducer = (state: string, action: UserActions) => {
    switch (action.type) {
        case "LOG_IN":
            return action.payload
        case "LOG_OUT":
            return ""
        default:
            return state
    }
}