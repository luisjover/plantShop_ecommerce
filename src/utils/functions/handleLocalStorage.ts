import { User } from "../../types/types"


export const setLoggedUser = (content: User) => {
    localStorage.setItem("loggedUser", JSON.stringify(content))
}

export const checkLoggedUser: () => User | null = () => {
    const storagedItem = localStorage.getItem("loggedUser")
    if (storagedItem === null) return null
    else {
        const user: User = JSON.parse(storagedItem)
        return user
    }
}