import { CgMenuLeft } from "react-icons/cg"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import "./heading.css"




export const Heading = (props: { toggleBurgerMenu: () => void }) => {

    const navigate = useNavigate()

    return (
        <div className="header-heading">
            <div className="menu-btn" onClick={() => props.toggleBurgerMenu()}>
                <figure>
                    <CgMenuLeft className="menu-icon" />
                </figure>
            </div>

            <figure>
                <img src="/src/assets/images/App/logo.webp" alt="Monstera Main Logo" className="main-logo" />
            </figure>

            <div className="cart-btn" onClick={() => navigate("/shopingcart")}>
                <figure>
                    <HiOutlineShoppingBag className="cart-icon" />
                </figure>
                <span className="cart-btn-number">2</span>
            </div>
        </div>
    )
}
