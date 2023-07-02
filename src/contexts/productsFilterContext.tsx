import { useState, createContext } from "react"
import { Filters, ProductFilters } from "../types/types"


export const currentFilterContext = createContext<{ currentFilter: Filters, changeFilter: (filterParam: Filters) => void }>({ currentFilter: ProductFilters.TOPSALES, changeFilter: () => { } })


export function FilterProvider({ ...props }) {
    const [currentFilter, setCurrentFilter] = useState<any>(ProductFilters.TOPSALES)

    const changeFilter = (filterParam: Filters) => {
        setCurrentFilter(filterParam)
    }

    return (
        <currentFilterContext.Provider value={{ currentFilter, changeFilter }}>
            {props.children}
        </currentFilterContext.Provider>
    )
}