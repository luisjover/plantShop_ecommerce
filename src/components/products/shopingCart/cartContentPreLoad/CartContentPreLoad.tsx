
import { useEffect } from 'react'
import { checkLoggedUser } from '../../../../utils/functions/handleLocalStorage'
import { CartProduct } from '../../../../types/types'


export const CartPreLoad = ({ cartContent, updateCartContent }: { cartContent: CartProduct[] | null, updateCartContent: (cartContent: CartProduct[]) => void }) => {
    useEffect(() => {

        const currentCart = checkLoggedUser()?.cart

        if (currentCart === undefined) return
        updateCartContent(currentCart)


    }, [cartContent])


    return null
}