import { Filter, AllProducts } from "../components"
import { FilterProvider } from "../contexts/productsFilterContext"
import { ProductsProvider } from "../contexts/allProductsContext"

export const HomePage = () => {
    return (
        <>

            <FilterProvider>
                <Filter />
                <AllProducts />
            </FilterProvider>

        </>
    )
}
