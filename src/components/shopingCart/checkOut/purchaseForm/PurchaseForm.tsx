import { useForm } from "react-hook-form"
import { useCartContentContext } from "../../../../utils/hooks/CartContentProvider"
import { checkLoggedUser } from "../../../../utils/functions/handleLocalStorage"
import { User } from "../../../../types/types"
import { updateStorageCart } from "../../../../utils/functions/manageCart"
import { useNavigate } from "react-router-dom"
import { updateUserCart } from "../../../../api/functions/apiFetch"
import "./purchaseForm.css"



export const PurchaseForm = () => {

    const user = checkLoggedUser() as User
    const { cartContent, updateCartContent } = useCartContentContext()
    const navigate = useNavigate()


    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm(
        {
            defaultValues: {
                fullName: "",
                email: "",
                address: "",
                phoneNumber: ""
            }
        }
    )


    const onSubmit = async () => {

        const lastPurchase = {
            userName: user.name,
            userEmail: user.email,
            invoiceName: watch("fullName"),
            invoiceEmail: watch("email"),
            invoiceAddress: watch("address"),
            invoicePhone: watch("phoneNumber"),
            purchase: cartContent
        }

        localStorage.setItem("lastPurchase", JSON.stringify(lastPurchase))

        updateStorageCart([])

        updateCartContent([])

        updateUserCart(user.id.toString(), [])

        reset()

        navigate("/purchaseconfirmed", { replace: true })

    }


    return (

        <div className="form-container">
            <h2 className="title">Shipping Info</h2>
            <form className="purchase-form" onSubmit={handleSubmit(onSubmit)}>

                <label className="input-label" htmlFor="fullName">Full Name</label>
                <input className="input" id="fullName"
                    {...register("fullName", {
                        required: true,
                        minLength: {
                            value: 6,
                            message: "Minimum length is 6"
                        },
                        maxLength: {
                            value: 22,
                            message: "Max length is 22"
                        }
                    })}
                />
                {errors.fullName && <p className="error-p">{errors.fullName.message}</p>}


                <label className="input-label" htmlFor="email">Email</label>
                <input className="input" id="email"
                    {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                            message: "Not a valid e-mail"
                        }
                    })}
                />
                {errors.email && <p className="error-p">{errors.email.message}</p>}


                <label className="input-label" htmlFor="address">Address</label>
                <input className="input" id="address"

                    {...register("address", {
                        required: true,


                    })}
                />


                <label className="input-label" htmlFor="phoneNumber">Phone Number</label>
                <input className="input" id="phoneNumber"

                    {...register("phoneNumber", {
                        required: true,
                        pattern: {
                            value: /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/i,
                            message: "Not a valid spanish number"
                        }

                    })}
                />
                {errors.phoneNumber && <p className="error-p">{errors.phoneNumber.message}</p>}

                <button className="form-btn" type="submit">CONFIRM PURCHASE</button>
            </form>
        </div>
    )
}
