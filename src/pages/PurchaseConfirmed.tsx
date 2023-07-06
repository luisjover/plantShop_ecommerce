import { useEffect } from "react"
import { Greetings } from "../components/greetings/Greetings"
import { useNavigate } from "react-router-dom"




export const PurchaseConfirmed = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/", { replace: true })
        }, 8000);


    }, [])



    return (
        <Greetings />
    )
}
