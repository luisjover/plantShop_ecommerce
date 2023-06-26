import { Link } from "react-router-dom"
import { CgMenuLeft } from "react-icons/cg"
import { HiOutlineShoppingBag } from "react-icons/hi"
import "./header.css"

export const Header = () => {
    return (
        <header className="header">
            <div className="header-heading">
                <figure>
                    <CgMenuLeft className="menu-icon" />
                </figure>

                <figure>
                    <img src="/src/assets/images/App/MONSTERA LOGO.webp" alt="Monstera Main Logo" className="main-logo" />
                </figure>

                <figure>
                    <HiOutlineShoppingBag className="menu-icon" />
                </figure>
            </div>


            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/aboutus">About Us</Link>
            </nav>
        </header>
    )
}
