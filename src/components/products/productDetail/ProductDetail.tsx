import { useProductContext } from "../../../utils/hooks/ProductsProvider"
import { useParams } from "react-router-dom"
import { getData } from "../../../api/functions/apiFetch"
import { Product } from "../../../types/types"
import { addToCart } from "../../../utils/functions/manageCart"
import { ItemCounter } from "../../counter/ItemCounter"
import { useEffect, useReducer } from "react"
import { counterReducer } from "../../../utils/functions/counterReducer"
import "./productDetail.css"
import { useCartContentContext } from "../../../utils/hooks/CartContentProvider"
import { resetScroll } from "../../../utils/functions/resetScroll"



export const ProductDetail = () => {

    useEffect(() => {
        resetScroll()


    })


    //All PRODUCTS CONTEXT AND API CALL CONTROL
    const { products, updateProducts } = useProductContext()
    const { updateCartContent } = useCartContentContext()

    if (products === null) {

        const getFetch = async () => {
            const newProducts = await getData("products") as Product[];
            updateProducts(newProducts)
        }

        getFetch()
    }

    //REDUCER COUNTER
    const initialValue = { counter: 0 };

    const [{ counter }, dispatch] = useReducer(counterReducer, initialValue);

    //PARAMS AND SELECTED PRODUCT IDENTIFICATION
    const params = useParams();

    const selectedProductId = params.productId

    if (selectedProductId === undefined) return;

    if (products === null) return;

    const selectedProduct = products.find((product) => product.id === parseInt(selectedProductId))

    if (selectedProduct === undefined) return


    const handlePurchase = (selectedProductId: number) => {

        const purchasingProduct = products.find((product) => product.id === selectedProductId) as Product
        addToCart(purchasingProduct, counter, updateCartContent)
        dispatch({ type: "reset" })
    }


    return (
        <section className="product-detail-container">
            <h2>{selectedProduct?.name}</h2>
            <figure className="img-container">
                <img src={selectedProduct.image[1]} alt={`Image of a ${selectedProduct.name} plant`} />
            </figure>
            <h3>{`${selectedProduct?.price} €`}</h3>

            <div className="buttons-container">
                < ItemCounter dispatch={dispatch}
                    counter={counter}
                />
                <button
                    className="btn-buy"
                    onClick={() => handlePurchase(selectedProduct.id)}
                    disabled={counter <= 0}
                >
                    ADD TO CART
                </button>
            </div>
            <div className="description-container">
                <h3>DESCRIPTION</h3>
                <p>Culpa officia duis aute elit deserunt ipsum. Aliqua cupidatat sunt proident adipisicing irure ex qui. Voluptate ullamco ut voluptate incididunt. Labore qui mollit sunt ipsum exercitation Lorem qui consectetur sunt amet.</p>

                <p>Amet ea enim cillum duis occaecat dolor consequat reprehenderit aute. Ex magna occaecat dolore commodo velit. Amet amet in do duis laboris laboris deserunt irure exercitation aute tempor sunt. In laboris nostrud quis consectetur adipisicing. Elit anim eiusmod aliqua aliquip eiusmod pariatur. Ut consectetur commodo adipisicing laboris ut ad esse.</p>

                <p>Proident adipisicing veniam cupidatat eiusmod consectetur dolor officia adipisicing sunt do. Pariatur aliquip ea sit pariatur commodo. Est labore ad anim elit tempor non mollit. Lorem veniam quis incididunt et.</p>
            </div>
        </section>
    )
}
