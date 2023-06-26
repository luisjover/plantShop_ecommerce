import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { HomePage } from "../pages/HomePage"
import { ProductPage } from "../pages/ProductPage"
import { ShopingCartPage } from "../pages/ShopingCartPage"


export const RouterPaths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="products" element={<HomePage />} >
                        <Route path=":productId" element={<ProductPage />} />
                    </Route>
                    <Route path="profile" element={<div> PROFILE PAGE </div>} >
                        <Route path="login" element={<ProductPage />} />
                        <Route path="register" element={<ProductPage />} />
                        <Route path="wishlist" element={<ProductPage />} />
                    </Route>
                    <Route path="shopingcart" element={<ShopingCartPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
