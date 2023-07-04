import { getData } from "../../../api/functions/apiFetch";
import { Product, User } from "../../../types/types"
import { checkLoggedUser } from "../../../utils/functions/handleLocalStorage"
import { useProductContext } from "../../../utils/hooks/ProductsProvider";


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
    const currentCart = currentUser.cart;


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
                    </div>
                )
            })}
            <p>Total: 2000 €</p>
            <button>Checkout</button>
        </div>
    )
}
