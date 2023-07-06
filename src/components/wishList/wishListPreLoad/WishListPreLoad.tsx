
import { useEffect } from 'react'
import { checkLoggedUser } from '../../../utils/functions/handleLocalStorage'
import { Product } from '../../../types/types'


export const ListPreLoad = ({ wishList, updateWishList }: { wishList: Product[] | null, updateWishList: (wishList: Product[]) => void }) => {

    useEffect(() => {

        const currentList = checkLoggedUser()?.wishlist

        if (currentList === undefined) return
        if (currentList === wishList) return
        console.log("wishlist before", wishList)
        console.log("currentlist before", currentList)

        updateWishList(currentList)

        console.log("wishlist after", wishList)
        console.log("currentlist after", currentList)


    }, [])


    return null
}