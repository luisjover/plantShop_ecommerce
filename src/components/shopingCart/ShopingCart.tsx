
import { getData, updateUserCart } from "../../api/functions/apiFetch";
import { Product, User } from "../../types/types"
import { checkLoggedUser } from "../../utils/functions/handleLocalStorage"
import { useProductContext } from "../../utils/hooks/ProductsProvider";
import { updateStorageCart } from "../../utils/functions/manageCart";
import { useCartContentContext } from "../../utils/hooks/CartContentProvider";
import { getTotalPrice } from "../../utils/functions/getTotalPrice";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./shopingCart.css"



export const ShopingCart = () => {

    const navigate = useNavigate()

    const { products, updateProducts } = useProductContext()

    if (products === null) {

        const getFetch = async () => {
            const newProducts = await getData("products") as Product[];
            updateProducts(newProducts)
        }
        getFetch()
    }

    const currentUser = checkLoggedUser() as User;


    const { cartContent, updateCartContent } = useCartContentContext()

    //FUNCTIONS TO MANAGE COUNTER AND SHOPPING CART
    const incrementItem = (productId: number) => {

        const productIndex = cartContent.findIndex((product) => product.id === productId)
        const newCart = currentUser.cart
        newCart[productIndex].quantity += 1
        updateCartContent(newCart)
        updateUserCart(currentUser.id.toString(), newCart)
        updateStorageCart(newCart)


    }

    const decrementItem = (productId: number) => {

        const productIndex = cartContent.findIndex((product) => product.id === productId)
        const newCart = currentUser.cart
        newCart[productIndex].quantity -= 1
        if (newCart[productIndex].quantity === 0) {
            deleteItem(productId)
            return
        }
        updateCartContent(newCart)
        updateUserCart(currentUser.id.toString(), newCart)
        updateStorageCart(newCart)
    }

    const deleteItem = (productId: number) => {
        const productIndex = cartContent.findIndex((product) => product.id === productId)
        const newCart = currentUser.cart
        newCart.splice(productIndex, 1)
        updateCartContent(newCart)
        updateUserCart(currentUser.id.toString(), newCart)
        updateStorageCart(newCart)
    }

    const price = getTotalPrice(cartContent)



    return (
        <section className="shopping-cart-container">
            <div className="subtotal-container">
                <div className="subtotal-info-container">
                    <span>Subtotal</span>
                    <span>{price.subtotalPrice}€</span>
                </div>
                <button className="checkout-btn subtotal-btn" onClick={() => navigate("checkout", { replace: true })} >Checkout</button>
            </div>
            {cartContent.map((cartProduct) => {
                const cartProductId = cartProduct.id;
                const fullProduct = products?.find((product) => product.id === cartProductId)
                return (
                    <div key={cartProductId} className="item-container">

                        {/* <h2>{cartProduct.name}</h2> */}
                        <figure>
                            <img src={fullProduct?.image[0]} alt={`Picture of a ${cartProduct.name} plant`} />
                        </figure>
                        <div className="card-info">
                            <span>{cartProduct.price}€</span>
                            <span>{cartProduct.name}</span>
                            {/* <span> x {cartProduct.quantity} units</span> */}
                            <div className="card-counter">
                                <RiDeleteBin5Line onClick={() => deleteItem(cartProduct.id)} className="card-button" />
                                <AiOutlineMinus onClick={() => decrementItem(cartProduct.id)} className="card-button" />
                                <span className="card-item-quantity">{cartProduct.quantity}</span>
                                <AiOutlinePlus onClick={() => incrementItem(cartProduct.id)} className="card-button" />
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="total-container">
                <div className="total-info">
                    <div className="total-info-section">
                        <span>Subtotal</span><span>{price.subtotalPrice}€</span>
                    </div>
                    <div className="total-info-section">
                        <span>Shipping Costs</span>{price.subtotalPrice >= 60 ? <span>Free Shipping</span> : <span>5.50€</span>}
                    </div>
                    <div className="total-info-section">
                        <span>TOTAL</span><span>{price.totalPrice}</span>
                    </div>
                </div>
                <button className="checkout-btn total-btn" onClick={() => navigate("checkout", { replace: true })} >Checkout</button>
            </div>
            <div className="endpage-add">
                <span>FREE SHIPPING FROM 60€!!</span>
            </div>
        </section>
    )
}
