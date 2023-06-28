import { Link } from "react-router-dom"
import { useEffect } from "react"
import "./burgerMenu.css"


export const BurgerMenu = (props: { menuState: boolean }) => {

    useEffect(() => {
        const navbar = document.querySelector("#navbar");
        navbar?.classList.toggle("hidden")


    }, [props.menuState])

    console.log(props.menuState)
    return (
        <nav id="navbar" className="navbar">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/aboutus">About Us</Link>
        </nav>
    )
}
