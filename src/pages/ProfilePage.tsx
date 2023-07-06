import { Link, Outlet } from "react-router-dom"
import { useUserContext } from "../utils/hooks/UserProvider"
import { guestUser } from "../assets/db/globalVariables"
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
        <>
            {userEmail === "" ? <div>Guest Account</div> : <div>Hello {checkLoggedUser()?.name}! Welcome back</div>}
            {userEmail === "" ? <Link to="access">ACCESS</Link> : <button onClick={handleLogOut}>LOG OUT</button>}
            <Link to="wishlist">WHISHLIST</Link>
            <Link to="/shopingcart">SHOPING CART</Link>

            <Outlet />

        </>
    )
}
