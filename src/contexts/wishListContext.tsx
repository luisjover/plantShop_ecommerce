import { createContext, useState } from "react";
import { Product } from "../types/types";




export const wishListContext = createContext<{ wishList: Product[], updateWishList: (wishList: Product[]) => void }>({ wishList: [], updateWishList: () => { } })

export function WishListProvider({ ...props }) {
    const [wishList, setWishList] = useState<Product[]>([])

    const updateWishList = (wishList: Product[]) => {
        setWishList(wishList)
    }

    return (
        <wishListContext.Provider value={{ wishList, updateWishList }}>
            {props.children}
        </wishListContext.Provider>
    )
}