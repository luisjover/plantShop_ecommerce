import { Filter } from "../components/filter/Filter"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { AllProducts } from "../components/products/AllProducts"

export const HomePage = () => {
    return (
        <>
            <Header />
            <Filter />
            <AllProducts />
            <Footer />
        </>
    )
}
