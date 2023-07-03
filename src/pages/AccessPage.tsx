import { Filter } from "../components"
import { accessFilterCategories } from "../assets/db/globalVariables"
import { Access } from "../components/profile/Access"
import { FilterProvider } from "../contexts/productsFilterContext"




export const AccessPage = () => {


    return (
        <>
            <FilterProvider>
                <Filter filters={accessFilterCategories} />
                <Access />
            </FilterProvider>
        </>
    )
}
