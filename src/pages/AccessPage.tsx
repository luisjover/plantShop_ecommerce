import { Access } from "../components/profile/Access"
import { accessFilterCategories } from "../assets/db/gb"




export const AccessPage = () => {


    return (
        <Access filters={accessFilterCategories} />
    )
}
