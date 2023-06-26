import { FC, useId } from 'react'
import { FilterCategories } from "../../types/types"
import { FilterButton } from "./filterButton/FilterButton"


export const Filter: FC = () => {

    const filters: FilterCategories[] = [
        {
            name: "TOP SELLER"
        },
        {
            name: "PET FRIENDLY"
        },
        {
            name: "EASY CARE"
        },
    ]

    return (
        <div>
            {filters.map((filter) => (
                <FilterButton
                    name={filter.name}
                    key={useId()}

                />
            ))}
        </div>
    )
}
