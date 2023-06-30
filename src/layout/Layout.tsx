import { Outlet } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { ProductsProvider } from "../contexts/allProductsContext"

export const Layout = () => {
    return (

        <>
            <Header />
            <ProductsProvider>
                <main className="main">
                    <Outlet />
                </main>
            </ProductsProvider>
            <Footer />
        </>

    )
}
