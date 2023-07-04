import { useForm } from "react-hook-form"
import { getUsers } from "../../api/functions/apiFetch"
import { useState } from "react"
import { useUserContext } from "../../utils/hooks/UserProvider"
import { useNavigate } from "react-router-dom"
import { setLoggedUser } from "../../utils/functions/handleLocalStorage"
import "./profile.css"

export const LoginForm = () => {

    const { logIn } = useUserContext()

    const [loginState, setLoginState] = useState("")

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm(
        {
            defaultValues: {
                email: "",
                password: "",
            }
        }
    )

    const navigate = useNavigate()

    let message = "";

    const onSubmit = async () => {

        const allUsers = await getUsers();
        const sucessfulloggedUser = allUsers.find((user) => {
            if (user.email === watch("email")) {
                if (user.password === watch("password")) {
                    message = ""
                    return true;
                } else {
                    message = "wrong password"
                    return false;
                }
            } else {
                message = "invalid user"
                return false
            }
        })

        setLoginState(message);

        if (sucessfulloggedUser) {
            logIn(watch("email"))
            setLoggedUser(sucessfulloggedUser)
            navigate("/", { replace: true })
            reset();
        }



    }


    return (
        <form className="access-form" onSubmit={handleSubmit(onSubmit)}>
            <label className="form-label" htmlFor="email">EMAIL</label>
            <input className="input" id="email" type="email"
                {...register("email", {
                    required: true,
                    pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                        message: "Not a valid e-mail"
                    }
                })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <label className="form-label" htmlFor="password">PASSWORD</label>
            <input className="input" id="password" type="text"

                {...register("password", {
                    required: true,
                    pattern: {
                        value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/i,
                        message: "The password must have between 8 and 16 characters, at least one digit, one lowercase, one uppercase and at least one non-alphanumeric character."
                    },

                })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            {loginState !== "" && <p>{loginState}</p>}

            <button className="submit" type="submit">LOG IN</button>
        </form>
    )
}
