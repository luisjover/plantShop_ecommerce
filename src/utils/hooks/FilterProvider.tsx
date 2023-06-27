import { currentFilterContext } from "../../contexts/productsFilterContext"
import { useContext } from "react"


export const useFilterContext = () => {
    return useContext(currentFilterContext)
}