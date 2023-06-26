import { FC } from 'react'
import { FilterCategories } from "../../../types/types"


export const FilterButton: FC<FilterCategories> = (props) => {
    return (

        <button >
            {props.name}
        </button>

    )
}
