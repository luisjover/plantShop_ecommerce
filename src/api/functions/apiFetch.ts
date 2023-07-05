import { CartProduct, Product, User } from "../../types/types";

export const getData = async (data: string): Promise<Product[] | User[]> => {

    const URL = `http://localhost:3000/${data}`
    const response = await fetch(URL);
    const fetchedData: Product[] | User[] = await response.json();

    return fetchedData;
}

export const getUsers = async (): Promise<User[]> => {

    const URL = "http://localhost:3000/users"
    const response = await fetch(URL);
    const fetchedData: User[] = await response.json();

    return fetchedData;
}

export const getUserById = async (id: string) => {
    const URL = `http://localhost:3000/users/${id}`
    const response = await fetch(URL);
    const fetchedData: User = await response.json();

    return fetchedData;
}

export const setNewUser = async (user: User) => {


    const URL = "http://localhost:3000/users"
    const response = await fetch(URL, {
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
    const URL = `http://localhost:3000/products/${id}`
    const response = await fetch(URL);
    const fetchedData: User[] = await response.json();

    return fetchedData;
}

export const updateUserCart = async (userId: string, newCart: CartProduct[]) => {

    console.log(userId)
    console.log(newCart)
    const URL = `http://localhost:3000/users/${userId}`
    const response = await fetch(URL, {
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

