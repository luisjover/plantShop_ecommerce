

export const RegisterForm = () => {
    return (
        <form>
            <label htmlFor="email">EMAIL</label>
            <input id="email" type="email" />

            <label htmlFor="name">NAME</label>
            <input id="name" type="text" />

            <label htmlFor="password">PASSWORD</label>
            <input id="password" type="text" />

            <label htmlFor="repeatpassword">REPEAT PASSWORD</label>
            <input id="repeatpassword" type="text" />

            <button type="submit"></button>
        </form>
    )
}
