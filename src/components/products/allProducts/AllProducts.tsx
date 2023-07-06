import { getData } from "../../../api/functions/apiFetch"
import { Product } from "../../../types/types"
import { ProductCard } from ".."
import { useFilterContext } from "../../../utils/hooks/FilterProvider"
import { useProductContext } from "../../../utils/hooks/ProductsProvider"
import "./allProducts.css"


export const AllProducts = () => {

    const { currentFilter } = useFilterContext()
    const { products, updateProducts } = useProductContext()



    if (products === null) {

        const getFetch = async () => {
            const newProducts = await getData("products") as Product[];
            updateProducts(newProducts)
        }
        getFetch()
    }



    if (products === null) return
    const filteredProducts: Product[] = products?.filter((product: Product) => product.filters.includes(currentFilter))

    console.log(products)
    return (
        <div className="product-card-container">
            {filteredProducts?.map(({ ...props }) => (
                <ProductCard {...props} key={props.id} />
            ))}
        </div>
    )
}
