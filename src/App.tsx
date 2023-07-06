
import { CartPreLoad } from './components/shopingCart/cartContentPreLoad/CartContentPreLoad'
import { UserPreLog } from './components/profile/userPreLog/UserPreLog'
import { RouterPaths } from './routes/RouterPaths.routes'
import { useCartContentContext } from './utils/hooks/CartContentProvider'
import { useUserContext } from './utils/hooks/UserProvider'
import { ListPreLoad } from './components/wishList/wishListPreLoad/WishListPreLoad'
import { useWishListContext } from './utils/hooks/WishListProvider'




export function App() {

  const { logIn, logOut } = useUserContext()
  const { cartContent, updateCartContent } = useCartContentContext()
  const { wishList, updateWishList } = useWishListContext()


  return (

    <>
      <UserPreLog logIn={logIn} logOut={logOut} />
      <CartPreLoad cartContent={cartContent} updateCartContent={updateCartContent} />
      <ListPreLoad wishList={wishList} updateWishList={updateWishList} />
      <RouterPaths />
    </>
  )
}