import { useForm } from "react-hook-form"
import "./profile.css"
import { getUsers } from "../../api/functions/apiFetch"
import { useState } from "react"

export const LoginForm = () => {

    const [loginState, setLoginState] = useState("")

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm(
        {
            defaultValues: {
                email: "",
                password: "",
            }
        }
    )

    let message = "";

    const onSubmit = async () => {

        const allUsers = await getUsers();
        const sucessfulLogin = allUsers.find((user) => {
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

        if (sucessfulLogin) {
            console.log("HAZ EL CONTEXTOOOOO")
        }

        reset();

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
