import { UserContext } from "../../contexts/userContext"
import { useContext } from "react"


export const useUserContext = () => {
    return useContext(UserContext)
}