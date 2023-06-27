import { useParams } from "react-router-dom"
import { ProductDetail } from "../components"


export const ProductPage = () => {

    const productId = useParams()

    if (productId.productid === undefined) return

    return (
        <ProductDetail
            productId={productId.productid}
        />
    )
}
