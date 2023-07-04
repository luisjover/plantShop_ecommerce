import { Link } from "react-router-dom"
import { useEffect } from "react"
import "./burgerMenu.css"


export const BurgerMenu = (props: { menuState: boolean, toggleBurgerMenu: () => void }) => {

    useEffect(() => {
        const burgerMenu = document.querySelector("#burger-menu");
        const navbar = document.querySelector("#burger-menu-navbar");
        const closeBtn = document.querySelector("#burger-menu-close-btn");
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
                <Link to="/"
                    onClick={() => props.toggleBurgerMenu()}
                >Home</Link>
                <Link to="/profile"
                    onClick={() => props.toggleBurgerMenu()}
                >Profile</Link>
                <Link to="/aboutus"
                    onClick={() => props.toggleBurgerMenu()}
                >About Us</Link>
            </nav>
            <div id="burger-menu-close-btn" className="burger-menu-close-btn"
                onClick={() => props.toggleBurgerMenu()}
            >
                X
            </div>



        </div>
    )
}
