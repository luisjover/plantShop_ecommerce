
import { FilterCategories, ProductFilters, AccessFilters } from "../../types/types"


export const productsFilterCategories: FilterCategories[] = [
    {
        name: "TOP SALES",
        id: "1",
        filter: ProductFilters.TOPSALES
    },
    {
        name: "PET FRIENDLY",
        id: "2",
        filter: ProductFilters.PETFRIENDLY
    },
    {
        name: "EASY CARE",
        id: "3",
        filter: ProductFilters.EASYCARE
    },
]

export const accessFilterCategories: FilterCategories[] = [
    {
        name: "LOGIN",
        id: "1",
        filter: AccessFilters.LOGIN
    },
    {
        name: "REGISTER",
        id: "2",
        filter: AccessFilters.REGISTER
    },
]

export const guestUser = {
    name: "",
    email: "",
    password: ""
}