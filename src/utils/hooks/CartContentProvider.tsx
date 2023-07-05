import { cartContentContext } from "../../contexts/cartContentContext"
import { useContext } from "react"


export const useCartContentContext = () => {
    return useContext(cartContentContext)
}