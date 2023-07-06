import { CartProduct } from "../../types/types";


export const getTotalPrice = (currentCart: CartProduct[]) => {

    let price = { subtotalPrice: 0, totalPrice: 0 }

    currentCart.forEach((product) => {

        if (product.quantity === undefined) return;
        price.subtotalPrice += product.price * product.quantity;

        if (price.subtotalPrice < 60) price.totalPrice = price.subtotalPrice + 5.5
        else price.totalPrice = price.subtotalPrice

    })
    return price;
}