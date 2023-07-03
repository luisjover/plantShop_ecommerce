import { CgMenuLeft } from "react-icons/cg"
import { HiOutlineShoppingBag } from "react-icons/hi"
import "./heading.css"
import { useNavigate } from "react-router-dom"




export const Heading = (props: { toggleBurgerMenu: () => void }) => {

    const navigate = useNavigate()

    return (
        <div className="header-heading">
            <button className="menu-btn" onClick={() => props.toggleBurgerMenu()}>
                <figure>
                    <CgMenuLeft className="menu-icon" />
                </figure>
            </button>

            <figure>
                <img src="/src/assets/images/App/MONSTERA LOGO.webp" alt="Monstera Main Logo" className="main-logo" />
            </figure>

            <button className="cart-btn" onClick={() => navigate("/shopingcart")}>
                <figure>
                    <HiOutlineShoppingBag className="cart-icon" />
                </figure>
            </button>
        </div>
    )
}
