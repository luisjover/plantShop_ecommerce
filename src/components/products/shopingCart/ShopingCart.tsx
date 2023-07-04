import { useState } from "react";
import { getData, updateUserCart } from "../../../api/functions/apiFetch";
import { ButtonAction, CartProduct, Product, User } from "../../../types/types"
import { checkLoggedUser } from "../../../utils/functions/handleLocalStorage"
import { useProductContext } from "../../../utils/hooks/ProductsProvider";
import { ItemCounter } from "../../counter/ItemCounter";
import { updateStorageCart } from "../../../utils/functions/addToCart";



export const ShopingCart = () => {

    const { products, updateProducts } = useProductContext()

    if (products === null) {

        const getFetch = async () => {
            const newProducts = await getData("products") as Product[];
            updateProducts(newProducts)
        }
        getFetch()
    }

    const currentUser = checkLoggedUser() as User;


    const [currentCart, setCurrentCart] = useState(currentUser.cart)

    const incrementItem = (productId: number) => {

        const productIndex = currentCart.findIndex((product) => product.id === productId)
        const newCart = currentUser.cart
        newCart[productIndex].quantity += 1
        setCurrentCart(newCart)
        updateUserCart(currentUser.id.toString(), newCart)
        updateStorageCart(newCart)


    }

    const decrementItem = (productId: number) => {

        const productIndex = currentCart.findIndex((product) => product.id === productId)
        const newCart = currentUser.cart
        newCart[productIndex].quantity -= 1
        if (newCart[productIndex].quantity === 0) {
            deleteItem(productId)
            return
        }
        setCurrentCart(newCart)
        updateUserCart(currentUser.id.toString(), newCart)
        updateStorageCart(newCart)
    }

    const deleteItem = (productId: number) => {
        const productIndex = currentCart.findIndex((product) => product.id === productId)
        const newCart = currentUser.cart
        newCart.splice(productIndex, 1)
        setCurrentCart(newCart)
        updateUserCart(currentUser.id.toString(), newCart)
        updateStorageCart(newCart)
    }



    return (
        <div>
            {currentCart.map((cartProduct) => {
                const cartProductId = cartProduct.id;
                const fullProduct = products?.find((product) => product.id === cartProductId)
                return (
                    <div key={cartProductId}>
                        <h2>{cartProduct.name}</h2>
                        <figure>
                            <img src={fullProduct?.image[0]} alt={`Picture of a ${cartProduct.name} plant`} />
                        </figure>
                        <span>{cartProduct.price} €</span>
                        <span> x {cartProduct.quantity} units</span>
                        <div>
                            <button onClick={() => incrementItem(cartProduct.id)} >+</button>
                            <button onClick={() => decrementItem(cartProduct.id)} >-</button>
                            <button onClick={() => deleteItem(cartProduct.id)} >c</button>
                        </div>
                    </div>
                )
            })}
            <p>Total: 2000 €</p>
            <button>Checkout</button>
        </div>
    )
}
