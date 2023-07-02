import { Link, Outlet } from "react-router-dom"
import { useUserContext } from "../utils/hooks/UserProvider"
import { guestUser } from "../assets/db/gb"


export const ProfilePage = () => {

    const { userEmail, logOut } = useUserContext()

    const handleLogOut = () => {
        localStorage.setItem("loggedUser", JSON.stringify(guestUser))
        logOut()
    }
    return (
        <>
            {userEmail === "" ? <div>Guest Account</div> : <div>Guest Account</div>}
            {userEmail === "" ? <Link to="access">ACCESS</Link> : <button onClick={handleLogOut}>LOG OUT</button>}
            <Link to="wishlist">WHISHLIST</Link>
            <Link to="/shopingcart">SHOPING CART</Link>

            <Outlet />

        </>
    )
}
