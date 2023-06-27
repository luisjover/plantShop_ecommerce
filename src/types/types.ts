
export type FilterCategories = {
    name: string
    id: string
}



export type Product = {
    id: number,
    name: string,
    price: number,
    stock: number,
    image: string,
    filters: string[]
}

enum Filter {
    "easycare",
    "topsales",
    "petfriendly"
}
