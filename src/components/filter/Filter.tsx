
import { FilterCategories } from "../../types/types"
import { FilterButton } from '.'
import "./filter.css"



export const Filter = (props: { filters: FilterCategories[] }) => {



    return (
        <nav className='filter-container'>
            {props.filters.map((category) => (
                <FilterButton
                    name={category.name}
                    id={category.id}
                    key={category.id}
                    // setCurrentFilter={setCurrentFilter}
                    filter={category.filter}
                />
            ))}
        </nav>
    )
}
