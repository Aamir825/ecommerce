
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Shop from '../src/Pages/Shop/Shop'
import { ProductDetails } from './Components/ProductDetails/ProductDetails'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Shop/>
        },
        {
          path: "details/:detailID",
          element: <ProductDetails/>
        },
        {
          path: "cart",
          element: <Cart/>
        },
        {
          path: "checkout",
          element: <Checkout/>
        }
      ]
      
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
