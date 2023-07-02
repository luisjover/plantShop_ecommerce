import { Product, User } from "../../types/types";

export const getData = async (data: string): Promise<Product[] | User[]> => {

    const URL = `http://localhost:3000/${data}`
    const response = await fetch(URL);
    const fetchedData: any = await response.json();


    return fetchedData;
}

export const setNewUser = async (user: User) => {

    console.log(user)
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


