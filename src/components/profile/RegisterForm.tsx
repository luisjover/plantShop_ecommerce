
import { getData } from "../../api/functions/apiFetch"
import { useForm } from "react-hook-form"
import { User } from "../../types/types"
import { useState } from "react"
import { setNewUser } from "../../api/functions/apiFetch"
import "./profile.css"

export const RegisterForm = () => {

    const [alreadyExisting, setAlreadyExisting] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm(
        {
            defaultValues: {
                username: "",
                email: "",
                password: "",
                repeatpassword: ""
            }
        }
    )

    const onSubmit = async () => {
        setAlreadyExisting(false)
        const users = await getData("users") as User[];
        console.log(users)
        if (users.find((user) => (user.email === watch("email")))) {
            setAlreadyExisting(true)
            return
        }

        const newId = users.length + 1

        const newUser: User = {
            id: newId,
            name: watch("username"),
            password: watch("password"),
            email: watch("email"),
            cart: [],
            wishlist: []
        }

        await setNewUser(newUser)
        reset()

    }


    return (
        <form className="access-form" onSubmit={handleSubmit(onSubmit)}>

            <label className="input-label" htmlFor="email">EMAIL</label>
            <input className="input" id="email"
                {...register("email", {
                    required: true,
                    pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                        message: "Not a valid e-mail"
                    }
                })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            {alreadyExisting && <p>User Already Existing</p>}

            <label className="input-label" htmlFor="usernamename">NAME</label>
            <input className="input" id="usernamename"
                {...register("username", {
                    required: true,
                    minLength: {
                        value: 4,
                        message: "Minimum length is 4"
                    },
                    maxLength: {
                        value: 12,
                        message: "Max length is 12"
                    }
                })}
            />
            {errors.username && <p>{errors.username.message}</p>}

            <label className="input-label" htmlFor="password">PASSWORD</label>
            <input className="input" id="password"

                {...register("password", {
                    required: true,
                    pattern: {
                        value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/i,
                        message: "The password must have between 8 and 16 characters, at least one digit, one lowercase, one uppercase and at least one non-alphanumeric character."
                    },

                })}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <label className="input-label" htmlFor="repeatpassword">REPEAT PASSWORD</label>
            <input className="input" id="repeatpassword"

                {...register("repeatpassword", {
                    required: true,
                    validate: (value: string) => {
                        if (watch("password") !== value) {
                            return "Passwords do not match"
                        }
                        return true
                    },

                })}
            />
            {errors.repeatpassword && <p>{errors.repeatpassword.message}</p>}

            <button className="submit" type="submit">SIGN IN</button>
        </form>
    )
}
