
import { FilterCategories } from "../../types/types"
import { FilterButton } from '.'
import "./filter.css"



export const Filter = (props: { filters: FilterCategories[], className: string }) => {



    return (
        <nav className={props.className}>
            {props.filters.map((category) => (
                <FilterButton
                    name={category.name}
                    id={category.id}
                    key={category.id}
                    filter={category.filter}
                />
            ))}
        </nav>
    )
}
