import { useReducer } from 'react'
import { createContext } from 'react'
import { userReducer } from './actions'

export const UserContext = createContext<{ userEmail: string, logIn: (email: string) => void, logOut: () => void }>({ userEmail: "", logIn: () => { }, logOut: () => { } })

export const UserContextProvider = ({ ...props }) => {

  const [userEmail, dispatch] = useReducer(userReducer, "")



  const logIn = (email: string) => {
    dispatch({
      type: "LOG_IN",
      payload: email
    })
  }

  const logOut = () => {
    dispatch({
      type: "LOG_OUT"
    })
  }

  return (
    <UserContext.Provider value={{ userEmail, logIn, logOut }}>
      {props.children}
    </UserContext.Provider>
  )
}
