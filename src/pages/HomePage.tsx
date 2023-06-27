import { Filter, AllProducts } from "../components"
import { FilterProvider } from "../contexts/productsFilterContext"

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
