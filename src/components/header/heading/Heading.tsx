import { CgMenuLeft } from "react-icons/cg"
import { HiOutlineShoppingBag } from "react-icons/hi"
import "./heading.css"




export const Heading = (props: { toggleBurgerMenu: () => void }) => {
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

            <button className="cart-btn">
                <figure>
                    <HiOutlineShoppingBag className="cart-icon" />
                </figure>
            </button>
        </div>
    )
}
