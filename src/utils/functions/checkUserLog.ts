// import { useUserContext } from '../hooks/UserProvider'
// import { guestUser } from '../../assets/db/gb'
// import { User } from '../../types/types'


// export const checkUserLog = () => {
//     const { logOut, logIn } = useUserContext()
//     const storagedUser = localStorage.getItem("loggedUser")


//     if (!storagedUser) {
//         logOut()
//         localStorage.setItem("loggedUser", JSON.stringify(guestUser))
//         console.log("logout")
//     } else {
//         const loggedUser: User = JSON.parse(storagedUser)
//         logIn(loggedUser.email)
//         console.log(loggedUser.email)
//     }
// }