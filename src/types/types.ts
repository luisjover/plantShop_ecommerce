

export type User = {
    id: number,
    name: string,
    password: string,
    email: string
}

export type Product = {
    id: number,
    name: string,
    price: number,
    stock: number,
    image: string,
    filters: Filters[]
}

export type FilterCategories = {
    name: string
    id: string
    filter: ProductFilters | AccessFilters
}

export type Filters = ProductFilters | AccessFilters;

export enum ProductFilters {
    TOPSALES = "topsales",
    EASYCARE = "easycare",
    PETFRIENDLY = "petfriendly"
}

export enum AccessFilters {
    LOGIN = "login",
    REGISTER = "register"
}

