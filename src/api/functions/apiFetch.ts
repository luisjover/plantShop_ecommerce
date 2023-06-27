import { Product } from "../../types/types";

export async function getProducts(): Promise<Product[]> {
    const URL = "http://localhost:3000/products"
    const URL2 = "/src/assets/db/db.json"
    const response = await fetch(URL);
    const data: any = await response.json();


    console.log(data)

    return data;
}