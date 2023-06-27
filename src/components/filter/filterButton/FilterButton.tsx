import { FC } from 'react'
import { FilterCategories } from "../../../types/types"
import { useFilterContext } from '../../../utils/hooks/FilterProvider'
import "./filterButton.css"


export const FilterButton: FC<FilterCategories> = ({ ...props }) => {

    const filterContext = useFilterContext()


    return (

        <>
            <input id={props.id} name="filter" type="radio" className="filter-input" value={props.id}
                onChange={() => filterContext.changeFilter(props.filter)} />
            <label htmlFor={props.id} className="filter-label">
                {props.name}
            </label>
        </>

    )
}
