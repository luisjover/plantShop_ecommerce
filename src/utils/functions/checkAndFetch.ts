import { Product } from "../../types/types";
import { getProducts } from "../../api/functions/apiFetch";


export const checkAndFetch = (products: Product[] | null) => {
    if (products !== null) return products
    if (products === null) {

        const getFetch = async () => {
            const newProducts = await getProducts();
            return newProducts
        }
        getFetch()
    }
}