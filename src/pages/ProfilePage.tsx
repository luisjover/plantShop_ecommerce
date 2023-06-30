import { Link, Outlet } from "react-router-dom"


export const ProfilePage = () => {
    return (
        <>
            <div>ProfilePage</div>
            <Link to="access">ACCESS</Link>
            <Link to="wishlist">WHISHLIST</Link>
            <Link to="/shopingcart">SHOPING CART</Link>

            <Outlet />

        </>
    )
}
