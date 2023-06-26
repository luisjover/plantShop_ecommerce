import { FC } from 'react'
import { FilterCategories } from "../../../types/types"


export const FilterButton: FC<FilterCategories> = (props) => {
    return (

        <div key={props.id}>
            {props.name}
        </div>

    )
}
