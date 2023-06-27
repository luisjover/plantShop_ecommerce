import { Link, NavLink } from "react-router-dom"
import { Product } from "../../../types/types"
import "./productCard.css"


export const ProductCard = (props: Product) => {
    return (
        <Link to={`/products/${props.id}`}>
            <div className="product-card">
                <figure className="product-card-figure">
                    <img className="product-card-img" src={props.image} alt={`Image of a ${props.name} plant`} />
                </figure>
                <h6>{props.name}</h6>
                <p>{props.price}</p>
            </div>
        </Link>
    )
}
