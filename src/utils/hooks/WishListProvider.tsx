import { wishListContext } from "../../contexts/wishListContext"
import { useContext } from "react"


export const useWishListContext = () => {
    return useContext(wishListContext)
}