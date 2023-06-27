
export type FilterCategories = {
    name: string
    id: string
    setCurrentFilter?: any
    filter: Filters
}



export type Product = {
    id: number,
    name: string,
    price: number,
    stock: number,
    image: string,
    filters: Filters[]
}

export enum Filters {
    topsales = "topsales",
    easycare = "easycare",
    petfriendly = "petfriendly"
}
