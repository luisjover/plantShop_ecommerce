

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

export type ButtonAction = {
    initialValue?: number;
    label: string;
    action: any;
    id?: string;
    display: string;
    getState?: any;
    title?: string;
    price?: string;
};

export type CounterActions =
    | { type: "increase" }
    | { type: "decrease" }
    | { type: "reset" }
    | { type: "purchase" };

export type UpdateCounter = {
    type: "update";
    payload: {
        counterValue: number;
        productId: string;
    };
}

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

