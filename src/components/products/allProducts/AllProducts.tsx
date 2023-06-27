import { getProducts } from "../../../api/functions/apiFetch"
import { Product } from "../../../types/types"
import { useEffect, useState } from "react"
import { ProductCard } from ".."
import { useFilterContext } from "../../../utils/hooks/FilterProvider"
import "./allProducts.css"


export const AllProducts = () => {
    const [products, setProducts] = useState<Product[] | null>(null)

    const filterContext = useFilterContext()


    useEffect(() => {

        const getFetch = async () => {
            const newProducts = await getProducts();
            setProducts(newProducts)
        }
        getFetch()
    }, [])

    const filteredProducts = products?.filter((product) => product.filters.includes(filterContext.currentFilter))


    return (
        <div className="product-card-container">
            {filteredProducts?.map(({ ...props }) => (
                <ProductCard {...props} key={props.id} />
            ))}
        </div>
    )
}
