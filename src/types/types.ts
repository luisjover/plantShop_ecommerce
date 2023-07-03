

export type User = {
    id: number,
    name: string,
    password?: string,
    email: string,
    cart: CartProduct[]
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

export type Filters =
    | ProductFilters
    | AccessFilters

export type UserActions =
    | { type: "LOG_IN", payload: string }
    | { type: "LOG_OUT" }

export type CartProduct = {
    id: number,
    name: string,
    price: number,
    quantity: number
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

