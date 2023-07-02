import { Outlet } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { ProductsProvider } from "../contexts/allProductsContext"
import { UserContextProvider } from "../contexts/userContext"

export const Layout = () => {
    return (

        <>
            <UserContextProvider>
                <Header />
                <ProductsProvider>
                    <main className="main">
                        <Outlet />
                    </main>
                </ProductsProvider>
                <Footer />
            </UserContextProvider>
        </>

    )
}
