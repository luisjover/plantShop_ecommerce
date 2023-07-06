import { Link } from "react-router-dom"
import { useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai";
import "./burgerMenu.css"


export const BurgerMenu = (props: { menuState: boolean, toggleBurgerMenu: () => void }) => {

    useEffect(() => {
        const burgerMenu = document.querySelector("#burger-menu");
        const body = document.querySelector("body");

        if (props.menuState === true) {
            burgerMenu?.classList.add("shown")
            body?.classList.add("fixed")
            // navbar?.classList.remove("hidden")
            // closeBtn?.classList.remove("hidden")
        } else {
            burgerMenu?.classList.remove("shown")
            body?.classList.remove("fixed")
            // navbar?.classList.add("hidden")
            // closeBtn?.classList.add("hidden")
        }


    }, [props.menuState])


    return (
        <div id="burger-menu" className="burger-menu">
            <nav id="burger-menu-navbar" className="burger-menu-navbar">
                <Link className="navbar-link" to="/" onClick={() => props.toggleBurgerMenu()}>
                    <span>Home</span>
                </Link>

                <Link className="navbar-link" to="/profile"
                    onClick={() => props.toggleBurgerMenu()}
                >Profile</Link>
                <Link className="navbar-link" to="/aboutus"
                    onClick={() => props.toggleBurgerMenu()}
                >About Us</Link>
            </nav>
            <div id="burger-menu-close-btn" className="burger-menu-close-btn"
                onClick={() => props.toggleBurgerMenu()}
            >
                <AiOutlineClose className="close-btn-icon" />
            </div>



        </div>
    )
}
