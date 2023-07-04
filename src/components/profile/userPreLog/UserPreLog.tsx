
import { guestUser } from '../../../assets/db/globalVariables'
import { useEffect } from 'react'
import { checkLoggedUser, setLoggedUser } from '../../../utils/functions/handleLocalStorage'

export const UserPreLog = ({ ...props }) => {
    useEffect(() => {

        const currentUser = checkLoggedUser()


        if (!currentUser) {
            props.logOut()
            setLoggedUser(guestUser)
        } else props.logIn(currentUser.email)


    }, [props.logIn, props.logOut])


    return null
}
