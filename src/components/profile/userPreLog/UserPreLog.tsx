
import { guestUser } from '../../../assets/db/globalVariables'
import { User } from '../../../types/types'
import { useEffect } from 'react'

export const UserPreLog = ({ ...props }) => {
    useEffect(() => {

        const storagedUser = localStorage.getItem("loggedUser")


        if (!storagedUser) {
            props.logOut()
            localStorage.setItem("loggedUser", JSON.stringify(guestUser))
        } else {
            const loggedUser: User = JSON.parse(storagedUser)
            props.logIn(loggedUser.email)
        }

    }, [props.logIn, props.logOut])


    return null
}
