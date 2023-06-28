import { productsContext } from "../../contexts/allProductsContext"
import { useContext } from "react"


export const useProductContext = () => {
    return useContext(productsContext)
}