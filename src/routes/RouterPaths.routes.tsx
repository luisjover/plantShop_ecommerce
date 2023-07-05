import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { HomePage } from "../pages/HomePage"
import { ProductPage } from "../pages/ProductPage"
import { ShopingCartPage } from "../pages/ShopingCartPage"
import { ProfilePage } from "../pages/ProfilePage"
import { AboutUsPage } from "../pages/AboutUsPage"
import { AccessPage } from "../pages/AccessPage"
import { WhishListPage } from "../pages/WhishListPage"
import { CheckoutPage } from "../pages/CheckoutPage"
import { PurchaseConfirmed } from "../pages/PurchaseConfirmed"


export const RouterPaths = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="products/:productId" element={<ProductPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="profile/access" element={<AccessPage />} />
                    <Route path="profile/wishlist" element={<WhishListPage />} />
                    <Route path="aboutus" element={<AboutUsPage />} />
                    <Route path="shopingcart" element={<ShopingCartPage />} />
                    <Route path="shopingcart/checkout" element={<CheckoutPage />} />
                    <Route path="purchaseconfirmed" element={<PurchaseConfirmed />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
