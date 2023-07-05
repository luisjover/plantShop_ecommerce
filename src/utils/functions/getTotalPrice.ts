import { CartProduct } from "../../types/types";


export const getTotalPrice = (currentCart: CartProduct[]) => {

    let totalPrice = 0;

    currentCart.forEach((product) => {

        if (product.quantity === undefined) return;
        totalPrice += product.price * product.quantity;

    })
    return totalPrice;
}