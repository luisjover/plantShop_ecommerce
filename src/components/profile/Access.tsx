
import { useEffect } from "react"
import { useFilterContext } from "../../utils/hooks/FilterProvider"
import { LoginForm } from "./LoginForm"
import { RegisterForm } from "./RegisterForm"
import { AccessFilters } from "../../types/types"


export const Access = () => {

    const { currentFilter, changeFilter } = useFilterContext()

    useEffect(() => {
        changeFilter(AccessFilters.LOGIN)

    }, [])


    return (
        <>
            {currentFilter === "login" ? <LoginForm /> : <RegisterForm />}
        </>
    )
}
