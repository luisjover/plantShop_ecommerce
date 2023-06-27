import { getProducts } from "../../api/functions/apiFetch"
import { Product } from "../../types/types"
import { useEffect, useState, useId } from "react"
import { ProductCard } from "./ProductCard"


export const AllProducts = () => {
    const [products, setProducts] = useState<Product[] | null>(null)
    console.log(products)

    useEffect(() => {

        async function getfetch() {
            const newProducts = await getProducts();
            setProducts(newProducts)
        }

        getfetch()


    }, [])





    // useEffect(() => {
    //   first

    //   return () => {
    //     second
    //   }
    // }, [third])

    if (products === null) return



    return (
        <div>
            {products.map(({ ...props }) => (
                <ProductCard {...props} key={props.id} />
            ))}
        </div>
    )
}
