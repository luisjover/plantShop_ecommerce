import { Link } from "react-router-dom"
import { useEffect } from "react"
import "./burgerMenu.css"


export const BurgerMenu = (props: { menuState: boolean, toggleBurgerMenu: () => void }) => {
    console.log(props.menuState)
    useEffect(() => {
        const burgerMenu = document.querySelector("#burger-menu");
        const body = document.querySelector("body");

        burgerMenu?.classList.toggle("hidden")

        if (props.menuState === true) body?.classList.add("fixed")
        else body?.classList.remove("fixed")

    }, [props.menuState])


    return (
        <div id="burger-menu" className="burger-menu">
            <nav className="burger-menu-navbar">
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
            <button className="burger-menu-close-btn"
                onClick={() => props.toggleBurgerMenu()}
            >
                X
            </button>



        </div>
    )
}
