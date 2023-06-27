import { getProducts } from "../../../api/functions/apiFetch"
import { Product } from "../../../types/types"
import { useEffect, useState } from "react"
import { ProductCard } from ".."
import { useFilterContext } from "../../../utils/hooks/FilterProvider"
import "./allProducts.css"


export const AllProducts = () => {
    const [products, setProducts] = useState<Product[] | null>(null)

    const filter = useFilterContext()


    useEffect(() => {

        async function getfetch() {
            const newProducts = await getProducts();
            setProducts(newProducts)
        }
        getfetch()
    }, [])

    const filteredProducts = products?.filter((product) => product.filters.includes(filter.currentFilter))



    if (filteredProducts === undefined) return



    return (
        <div className="product-card-container">
            {filteredProducts.map(({ ...props }) => (
                <ProductCard {...props} key={props.id} />
            ))}
        </div>
    )
}
