import { createContext, useState } from "react";
import { CartProduct } from "../types/types";




export const cartContentContext = createContext<{ cartContent: CartProduct[] | null, updateCartContent: (cartContent: CartProduct[]) => void }>({ cartContent: null, updateCartContent: () => { } })

export function CartContentProvider({ ...props }) {
    const [cartContent, setCartContent] = useState<CartProduct[] | null>(null)

    const updateCartContent = (cartContent: CartProduct[]) => {
        setCartContent(cartContent)
    }

    return (
        <cartContentContext.Provider value={{ cartContent, updateCartContent }}>
            {props.children}
        </cartContentContext.Provider>
    )
}