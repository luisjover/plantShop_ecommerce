
import { Product, User } from "../../types/types";

import { checkLoggedUser, setLoggedUser } from "./handleLocalStorage";




export const updateStorageList = (newList: Product[]) => {
    const currentUser = checkLoggedUser() as User
    currentUser.wishlist = newList
    setLoggedUser(currentUser)

}