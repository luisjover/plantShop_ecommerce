import { Filter, AllProducts } from "../components"
import { FilterProvider } from "../contexts/productsFilterContext"
import { productsFilterCategories } from "../assets/db/gb"


export const HomePage = () => {


    return (
        <>

            <FilterProvider>
                <Filter filters={productsFilterCategories} />
                <AllProducts />
            </FilterProvider>

        </>
    )
}
