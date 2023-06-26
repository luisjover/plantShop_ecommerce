import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="header">
            <figure>
                <img src="" alt="" />
            </figure>

            <figure>
                <img src="" alt="" />
            </figure>

            <figure>
                <img src="" alt="" />
            </figure>


            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    )
}
