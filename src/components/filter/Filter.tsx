import { FC } from 'react'
import { FilterCategories } from "../../types/types"
import { FilterButton } from "./filterButton/FilterButton"


export const Filter: FC = () => {

    const filters: FilterCategories[] = [
        {
            name: "TOP SELLER",
            id: "1"
        },
        {
            name: "PET FRIENDLY",
            id: "2"
        },
        {
            name: "EASY CARE",
            id: "3"
        },
    ]

    return (
        <div>
            {filters.map((filter) => (
                <FilterButton
                    name={filter.name}
                    id={filter.id}
                    key={filter.id}

                />
            ))}
        </div>
    )
}
