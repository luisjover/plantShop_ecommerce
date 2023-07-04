import { useProductContext } from "../../../utils/hooks/ProductsProvider"
import { useParams } from "react-router-dom"
import { getData } from "../../../api/functions/apiFetch"
import { Product } from "../../../types/types"
import { addToCart } from "../../../utils/functions/addToCart"
import "./productDetail.css"



export const ProductDetail = () => {

    const { products, updateProducts } = useProductContext()

    if (products === null) {

        const getFetch = async () => {
            const newProducts = await getData("products") as Product[];
            updateProducts(newProducts)
        }

        getFetch()
    }

    const params = useParams();

    const selectedProductId = params.productId

    if (selectedProductId === undefined) return;

    if (products === null) return;

    const selectedProduct = products.find((product) => product.id === parseInt(selectedProductId))

    if (selectedProduct === undefined) return

    const handlePurchase = (selectedProductId: number) => {

        const purchasingProduct = products.find((product) => product.id === selectedProductId) as Product
        addToCart(purchasingProduct)
    }

    return (
        <section className="product-detail-container">
            <h2>{selectedProduct?.name}</h2>
            <figure className="img-container">
                <img src={selectedProduct.image[1]} alt={`Image of a ${selectedProduct.name} plant`} />
            </figure>
            <p>{`${selectedProduct?.price} €`}</p>
            <button onClick={() => handlePurchase(selectedProduct.id)}>Add to Cart</button>
        </section>
    )
}
