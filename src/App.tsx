
import { CartPreLoad } from './components/products/shopingCart/cartContentPreLoad/CartContentPreLoad'
import { UserPreLog } from './components/profile/userPreLog/UserPreLog'
import { RouterPaths } from './routes/RouterPaths.routes'
import { useCartContentContext } from './utils/hooks/CartContentProvider'
import { useUserContext } from './utils/hooks/UserProvider'




export function App() {

  const { logIn, logOut } = useUserContext()
  const { cartContent, updateCartContent } = useCartContentContext()


  return (

    <>
      <UserPreLog logIn={logIn} logOut={logOut} />
      <CartPreLoad cartContent={cartContent} updateCartContent={updateCartContent} />
      <RouterPaths />
    </>
  )
}