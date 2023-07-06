
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { UserContextProvider } from "./contexts/userContext"
import { CartContentProvider } from './contexts/cartContentContext.tsx'
import { WishListProvider } from './contexts/wishListContext.tsx'
import './css/reset.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <UserContextProvider>
    <CartContentProvider>
      <WishListProvider>
        <App />
      </WishListProvider>
    </CartContentProvider>
  </UserContextProvider>

)
