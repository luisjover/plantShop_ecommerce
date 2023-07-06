
import { useCartContentContext } from "../../../utils/hooks/CartContentProvider"
import { useProductContext } from "../../../utils/hooks/ProductsProvider"


export const PurchaseResume = () => {

    const { products } = useProductContext()
    const { cartContent } = useCartContentContext()


    return (
        <>
            <h2>PurchaseResume</h2>
            <div>
                {cartContent.map((product) => {
                    const cartProductId = product.id;
                    const fullProduct = products?.find((product) => product.id === cartProductId)
                    return (
                        <div className="purchased-item-card" key={product.id}>
                            <figure>
                                <img src={fullProduct?.image[0]} alt={`Image of a ${product.name} plant`} />
                            </figure>
                            <div>
                                <p>{product.name}</p>
                                <p>{product.quantity} units</p>
                                <p>{product.price * product.quantity} €</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
