import { Heading } from "./heading/Heading"
import { BurgerMenu } from "./burgerMenu/BurgerMenu"
import { useState, useEffect } from "react"
import "./header.css"

export const Header = () => {

    const [menuVisibility, setMenuVisibility] = useState(false)

    const toggleBurgerMenu = () => {
        setMenuVisibility(!menuVisibility)
    }





    return (
        <header className="header">
            <Heading toggleBurgerMenu={toggleBurgerMenu} />
            <BurgerMenu menuState={menuVisibility} toggleBurgerMenu={toggleBurgerMenu} />
        </header>
    )
}
