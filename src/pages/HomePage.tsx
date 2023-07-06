import { Filter, AllProducts } from "../components"
import { FilterProvider } from "../contexts/productsFilterContext"
import { productsFilterCategories } from "../assets/db/globalVariables"


export const HomePage = () => {


    return (
        <>

            <FilterProvider>
                <Filter filters={productsFilterCategories}
                    className="home-filter"
                />
                <AllProducts />
            </FilterProvider>

        </>
    )
}
