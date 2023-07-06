import { CgMenuLeft } from "react-icons/cg"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import "./heading.css"
import { useCartContentContext } from "../../../utils/hooks/CartContentProvider"





export const Heading = (props: { toggleBurgerMenu: () => void }) => {

    const { cartContent } = useCartContentContext()

    const navigate = useNavigate()

    return (
        <div className="header-heading">
            <div className="menu-btn" onClick={() => props.toggleBurgerMenu()}>
                <figure>
                    <CgMenuLeft className="menu-icon" />
                </figure>
            </div>

            <div onClick={() => navigate("/")}>
                <figure>
                    <img src="/src/assets/images/App/logo.webp" alt="Monstera Main Logo" className="main-logo" />
                </figure>
            </div>

            <div className="cart-btn" onClick={() => navigate("/shopingcart")}>
                <figure className="figure-btn">
                    <HiOutlineShoppingBag className="cart-icon" />
                </figure>
                {cartContent.length > 0 ? <span className="cart-btn-number">{cartContent?.length}</span> : null}
            </div>
        </div>
    )
}
