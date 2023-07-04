import { Heading } from "./heading/Heading"
import { BurgerMenu } from "./burgerMenu/BurgerMenu"
import { useState } from "react"
// import { useUserContext } from "../../utils/hooks/UserProvider"
import "./header.css"

export const Header = () => {

    // const { userEmail } = useUserContext()

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
