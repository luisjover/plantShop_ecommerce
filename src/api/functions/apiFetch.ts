import { CartProduct, Product, User } from "../../types/types";
const URL = "https://plant-ecommerce-json-server.vercel.app/";

export const getData = async (data: string): Promise<Product[] | User[]> => {

    const url = `${URL}${data}`
    const response = await fetch(url);
    const fetchedData: Product[] | User[] = await response.json();

    return fetchedData;
}


export const getUserById = async (id: string) => {
    const url = `${URL}users/${id}`
    const response = await fetch(url);
    const fetchedData: User = await response.json();

    return fetchedData;
}

export const setNewUser = async (user: User) => {


    const url = `${URL}users`
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),

    });

    const data = await response.json()
    return data
}

export const getProductById = async (id: string) => {
    const url = `${URL}products/${id}`
    const response = await fetch(url);
    const fetchedData: User[] = await response.json();

    return fetchedData;
}

export const updateUserCart = async (userId: string, newCart: CartProduct[]) => {


    const url = `${URL}users/${userId}`
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            cart: newCart
        }),

    });

    const data = await response.json()
    return data
}

export const updateUserWishlist = async (userId: string, newList: Product[]) => {
    const url = `${URL}users/${userId}`
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            wishlist: newList
        }),

    });

    const data = await response.json()
    return data
}

