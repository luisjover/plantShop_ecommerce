import { useState, createContext } from "react"
import { Filters } from "../types/types"




export const currentFilterContext = createContext<{ currentFilter: Filters, changeFilter: (filterParam: Filters) => void }>({ currentFilter: Filters.topsales, changeFilter: () => { } })



export function FilterProvider(props: any) {
    const [currentFilter, setCurrentFilter] = useState<any>(Filters.topsales)

    const changeFilter = (filter: Filters) => {
        setCurrentFilter(filter)
    }

    return (
        <currentFilterContext.Provider value={{ currentFilter, changeFilter }}>
            {props.children}
        </currentFilterContext.Provider>
    )
}