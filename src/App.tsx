
import { UserPreLog } from './components/profile/userPreLog/UserPreLog'
import { RouterPaths } from './routes/RouterPaths.routes'
import { useUserContext } from './utils/hooks/UserProvider'





export function App() {

  const { logIn, logOut } = useUserContext()


  return (

    <>
      <UserPreLog logIn={logIn} logOut={logOut} />
      <RouterPaths />
    </>
  )
}