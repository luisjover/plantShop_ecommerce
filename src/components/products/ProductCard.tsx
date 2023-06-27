import { Product } from "../../types/types"


export const ProductCard = (props: Product) => {
    return (
        <div className="product-card">
            <figure>
                <img src={props.image} />
            </figure>
            <h6>{props.name}</h6>
            <p>{props.price}</p>
        </div>
    )
}
