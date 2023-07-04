import { Link, NavLink } from "react-router-dom"
import { Product } from "../../../types/types"
import "./productCard.css"


export const ProductCard = (props: Product) => {
    return (
        <Link role="button" to={`/products/${props.id}`}>
            <div className="product-card">
                <figure className="product-card-figure">
                    <img className="product-card-img" src={props.image[0]} alt={`Image of a ${props.name} plant`} />
                </figure>
                <h3>{props.name}</h3>
                <p>{props.price}</p>
            </div>
        </Link>
    )
}
