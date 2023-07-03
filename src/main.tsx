
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { UserContextProvider } from "./contexts/userContext"
import './css/reset.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <UserContextProvider>
    <App />
  </UserContextProvider>

)
