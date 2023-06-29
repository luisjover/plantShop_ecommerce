import { useState, createContext } from "react"
import { Product } from "../types/types"




export const productsContext = createContext<{ products: Product[] | null; updateProducts: (products: Product[]) => void; }>({ products: null, updateProducts: () => { } })



export function ProductsProvider({ ...props }) {
    const [products, setProducts] = useState<Product[] | null>(null)

    const updateProducts = (products: Product[]) => {
        setProducts(products)
    }

    return (
        <productsContext.Provider value={{ products, updateProducts }}>
            {props.children}
        </productsContext.Provider>
    )
}