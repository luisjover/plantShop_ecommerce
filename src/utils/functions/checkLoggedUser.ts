import { User } from "../../types/types";


export const checkLoggedUser: () => User = () => {
    const storagedUser = localStorage.getItem("loggedUser");
    if (storagedUser === null) return;
    return JSON.parse(storagedUser);

}