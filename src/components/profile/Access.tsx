import { Filter } from ".."
import { LoginForm } from "./login/LoginForm"
import { RegisterForm } from "./register/RegisterForm"


export const Access = ({ ...props }) => {
    return (
        <div>
            <Filter filters={props.filters} />
            <LoginForm />
            <RegisterForm />
        </div>
    )
}
