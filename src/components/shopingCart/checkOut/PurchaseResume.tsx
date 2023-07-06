
import { useCartContentContext } from "../../../utils/hooks/CartContentProvider"
import { useProductContext } from "../../../utils/hooks/ProductsProvider"
import "./purchaseResume.css"


export const PurchaseResume = () => {

    const { products } = useProductContext()
    const { cartContent } = useCartContentContext()


    return (
        <div className="resume-container">
            <h2 className="title">Purchase Resume</h2>

            {cartContent.map((product) => {
                const cartProductId = product.id;
                const fullProduct = products?.find((product) => product.id === cartProductId)
                return (
                    <div className="purchased-item-card" key={product.id}>
                        <figure >
                            <img className="purchased-item-img" src={fullProduct?.image[0]} alt={`Image of a ${product.name} plant`} />
                        </figure>
                        <div className="purchased-item-info">
                            <span>x{product.quantity} {product.name}</span>
                            <span>Subtotal: {product.price * product.quantity}€</span>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
