import { FC } from 'react'
import { FilterCategories } from "../../../types/types"
import "./filterButton.css"


export const FilterButton: FC<FilterCategories> = ({ name, id }) => {


    return (

        <>
            <input id={id} name="filter" type="radio" className="filter-input" value={id} />
            <label htmlFor={id} className="filter-label">
                {name}
            </label>
        </>

    )
}
