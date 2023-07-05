

import { useEffect } from 'react'
import { checkLoggedUser, setLoggedUser } from '../../../utils/functions/handleLocalStorage'
import { User } from '../../../types/types'
import { getUserById } from '../../../api/functions/apiFetch'

export const UserPreLog = ({ logIn, logOut }: { logIn: (email: string) => void, logOut: () => void }) => {
    useEffect(() => {

        const checkUser = async () => {
            const currentUser = checkLoggedUser()


            if (!currentUser) {
                logIn("")
                const guestUser = await getUserById("1")

                setLoggedUser(guestUser)
            } else logIn(currentUser.email)
        }

        checkUser()


    }, [logIn, logOut])


    return null
}
