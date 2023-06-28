import { useProductContext } from "../../../utils/hooks/ProductsProvider"
import { useParams } from "react-router-dom"
import { getProducts } from "../../../api/functions/apiFetch"

export const ProductDetail = ({ ...props }) => {

    const { products, updateProducts } = useProductContext()
    if (products === null) {
        const getFetch = async () => {
            const newProducts = await getProducts();
            updateProducts(newProducts)
        }
        getFetch()
    }

    const params = useParams();


    const selectedProductId = params.productId







    if (selectedProductId === undefined) return


    if (products === null) return;
    const selectedProduct = products.find((product) => product.id === parseInt(selectedProductId))

    console.log("producto seleccionado del array grande", selectedProduct)


    return (
        <section>
            <h4>{selectedProduct?.name}</h4>
            <figure>
                <img src={selectedProduct?.image} alt="" />
            </figure>
            <p>precio</p>
            <button>Add to Cart</button>
        </section>
    )
}
