import { Link, Outlet } from "react-router-dom"
import { useUserContext } from "../utils/hooks/UserProvider"
import { guestUser } from "../assets/db/globalVariables"


export const ProfilePage = () => {

    const { userEmail, logOut } = useUserContext()

    const handleLogOut = () => {
        localStorage.setItem("loggedUser", JSON.stringify(guestUser))
        logOut()
    }

    const currentUser = () => {
        const storagedUser = localStorage.getItem("loggedUser")
        if (storagedUser === null) return;
        return JSON.parse(storagedUser)
    }


    return (
        <>
            {userEmail === "" ? <div>Guest Account</div> : <div>Hello {currentUser().name}! Welcome back</div>}
            {userEmail === "" ? <Link to="access">ACCESS</Link> : <button onClick={handleLogOut}>LOG OUT</button>}
            <Link to="wishlist">WHISHLIST</Link>
            <Link to="/shopingcart">SHOPING CART</Link>

            <Outlet />

        </>
    )
}
