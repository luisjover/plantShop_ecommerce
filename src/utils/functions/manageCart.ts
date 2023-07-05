import { updateUserCart } from "../../api/functions/apiFetch";
import { CartProduct, Product, User } from "../../types/types";
import { checkLoggedUser, setLoggedUser } from "./handleLocalStorage";


export const addToCart = ({ ...props }: Product, quantity: number, updateContext: (cartContent: CartProduct[]) => void) => {

    const productToAdd: CartProduct = {
        id: props.id,
        name: props.name,
        price: props.price,
        quantity: quantity
    }

    const currentUser = checkLoggedUser() as User
    let currentCart = currentUser.cart


    const alreadyPurchased = currentCart.find((product) => product.id === props.id)



    if (alreadyPurchased === undefined) currentCart.push(productToAdd)
    else {
        alreadyPurchased.quantity += quantity
    }

    updateUserCart(currentUser.id.toString(), currentCart)
    updateStorageCart(currentCart)
    updateContext(currentCart)


}

export const updateStorageCart = (newCart: CartProduct[]) => {
    const currentUser = checkLoggedUser() as User
    currentUser.cart = newCart
    setLoggedUser(currentUser)

}

