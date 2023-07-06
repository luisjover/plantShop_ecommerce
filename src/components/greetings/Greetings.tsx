import { checkLoggedUser } from "../../utils/functions/handleLocalStorage"
import { User } from "../../types/types"
import "./greetings.css"


export const Greetings = () => {

    const currentUser = checkLoggedUser() as User

    return (
        <div className="greetings">
            <h2>CONGRATULATIONS!! </h2>
            <h3>Your Order has been Successfully Completed</h3>
            <span>Thank you for your trust, dear {currentUser.name} {currentUser.name === "guest" ? <span>user</span> : null}!!</span>
            <span>Come back soon!</span>
        </div>
    )
}
