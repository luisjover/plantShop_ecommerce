import { updateUserCart } from "../../api/functions/apiFetch";
import { CartProduct, Product, User } from "../../types/types";
import { checkLoggedUser } from "./checkLoggedUser";


export const addToCart = ({ ...props }: Product) => {

    const productToCart: CartProduct = {
        id: props.id,
        name: props.name,
        price: props.price,
        quantity: 1
    }

    const currentUser = checkLoggedUser()
    let currentCart = currentUser.cart


    const alreadyPurchased = currentCart.find((product) => product.id === props.id)



    if (alreadyPurchased === undefined) currentCart.push(productToCart)
    else {
        alreadyPurchased.quantity += 1
    }

    updateUserCart(props.id.toString(), currentCart)
    updateStorageCart(currentCart)

}

export const updateStorageCart = (newCart: CartProduct[]) => {
    const currentUser = checkLoggedUser()
    currentUser.cart = newCart
    localStorage.setItem("loggedUser", JSON.stringify(currentUser))
}