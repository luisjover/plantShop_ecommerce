import "./profile.css"

export const LoginForm = () => {
    return (
        <form className="access-form">
            <label className="form-label" htmlFor="email">EMAIL</label>
            <input className="input" id="email" type="email" />

            <label className="form-label" htmlFor="password">PASSWORD</label>
            <input className="input" id="password" type="text" />

            <button className="submit" type="submit">LOG IN</button>
        </form>
    )
}
