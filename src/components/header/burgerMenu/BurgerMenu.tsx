import { Link } from "react-router-dom"
import { useEffect } from "react"
import "./burgerMenu.css"


export const BurgerMenu = (props: { menuState: boolean }) => {

    useEffect(() => {
        const burgerMenu = document.querySelector("#burger-menu");
        burgerMenu?.classList.toggle("hidden")


    }, [props.menuState])

    console.log(props.menuState)
    return (
        <div id="burger-menu" className="burger-menu">
            <nav className="burger-menu-navbar">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/aboutus">About Us</Link>
            </nav>

            <button className="burger-menu-close-btn">
                X
            </button>

        </div>
    )
}
