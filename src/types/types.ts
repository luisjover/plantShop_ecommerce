

export type Product = {
    id: number,
    name: string,
    price: number,
    stock: number,
    image: string,
    filters: ProductFilters[]
}

export type FilterCategories = {
    name: string
    id: string
    filter: ProductFilters | AccessFilters
}

export enum ProductFilters {
    TOPSALES = "topsales",
    EASYCARE = "easycare",
    PETFRIENDLY = "petfriendly"
}

export enum AccessFilters {
    LOGIN = "login",
    REGISTER = "register"
}

export type Filters = ProductFilters | AccessFilters;
