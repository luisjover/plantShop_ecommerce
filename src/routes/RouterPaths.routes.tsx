import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { HomePage } from "../pages/HomePage"
import { ProductPage } from "../pages/ProductPage"
import { ShopingCartPage } from "../pages/ShopingCartPage"
import { ProfilePage } from "../pages/ProfilePage"
import { AboutUs } from "../pages/AboutUs"
import { ProductsProvider } from "../contexts/allProductsContext"


export const RouterPaths = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="products/:productId" element={<ProductPage />} />
                    <Route path="profile" element={<ProfilePage />} >
                        <Route path="login" element={<ProductPage />} />
                        <Route path="register" element={<ProductPage />} />
                        <Route path="wishlist" element={<ProductPage />} />
                    </Route>
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="shopingcart" element={<ShopingCartPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
