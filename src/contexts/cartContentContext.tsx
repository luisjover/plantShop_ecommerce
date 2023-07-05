import { createContext, useState } from "react";
import { CartProduct } from "../types/types";




export const cartContentContext = createContext<{ cartContent: CartProduct[], updateCartContent: (cartContent: CartProduct[]) => void }>({ cartContent: [], updateCartContent: () => { } })

export function CartContentProvider({ ...props }) {
    const [cartContent, setCartContent] = useState<CartProduct[]>([])

    const updateCartContent = (cartContent: CartProduct[]) => {
        setCartContent(cartContent)
    }

    return (
        <cartContentContext.Provider value={{ cartContent, updateCartContent }}>
            {props.children}
        </cartContentContext.Provider>
    )
}