import { NavLink, Outlet } from "react-router-dom"
import { useUserContext } from "../utils/hooks/UserProvider"
import { checkLoggedUser, setLoggedUser } from "../utils/functions/handleLocalStorage"
import { getUserById } from "../api/functions/apiFetch"


export const ProfilePage = () => {

    const { userEmail, logIn } = useUserContext()

    const handleLogOut = async () => {
        const guestUser = await getUserById("1")

        setLoggedUser(guestUser)
        logIn("")
    }


    return (
        <div className="profile-page">
            {userEmail === "" ? <div className="profile-title" >Guest Account</div> : <div className="profile-title" >Hello {checkLoggedUser()?.name}! Welcome back</div>}
            {userEmail === "" ? <NavLink className="profile-navlink" to="access">ACCESS</NavLink> : <button className="logout-btn" onClick={handleLogOut}>LOG OUT</button>}
            <NavLink className="profile-navlink" to="wishlist">WHISHLIST</NavLink>
            <NavLink className="profile-navlink" to="/shopingcart">SHOPING CART</NavLink>

            <Outlet />

        </div>
    )
}
