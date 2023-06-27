import { FC, useContext } from 'react'
import { FilterCategories, Filters } from "../../types/types"
import { FilterButton } from '.'
import "./filter.css"



export const Filter: FC = () => {

    // const [currentFilter, setCurrentFilter] = useState<Filters>(Filters.topsales)





    const filters: FilterCategories[] = [
        {
            name: "TOP SALES",
            id: "1",
            filter: Filters.topsales
        },
        {
            name: "PET FRIENDLY",
            id: "2",
            filter: Filters.petfriendly
        },
        {
            name: "EASY CARE",
            id: "3",
            filter: Filters.easycare
        },
    ]

    return (
        <nav className='filter-container'>
            {filters.map((filter) => (
                <FilterButton
                    name={filter.name}
                    id={filter.id}
                    key={filter.id}
                    // setCurrentFilter={setCurrentFilter}
                    filter={filter.filter}

                />
            ))}
        </nav>
    )
}
