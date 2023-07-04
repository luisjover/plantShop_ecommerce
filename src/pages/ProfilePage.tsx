import { Link, Outlet } from "react-router-dom"
import { useUserContext } from "../utils/hooks/UserProvider"
import { guestUser } from "../assets/db/globalVariables"
import { checkLoggedUser, setLoggedUser } from "../utils/functions/handleLocalStorage"


export const ProfilePage = () => {

    const { userEmail, logOut } = useUserContext()

    const handleLogOut = () => {
        setLoggedUser(guestUser)
        logOut()
    }


    return (
        <>
            {userEmail === "" ? <div>Guest Account</div> : <div>Hello {checkLoggedUser()?.name}! Welcome back</div>}
            {userEmail === "" ? <Link to="access">ACCESS</Link> : <button onClick={handleLogOut}>LOG OUT</button>}
            <Link to="wishlist">WHISHLIST</Link>
            <Link to="/shopingcart">SHOPING CART</Link>

            <Outlet />

        </>
    )
}
