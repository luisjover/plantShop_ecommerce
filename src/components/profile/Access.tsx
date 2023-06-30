import { LoginForm } from "./login/LoginForm"
import { RegisterForm } from "./register/RegisterForm"


export const Access = () => {
    return (
        <div>
            <div>LOGIN</div>
            <div>SIGN UP</div>
            <LoginForm />
            <RegisterForm />
        </div>
    )
}
