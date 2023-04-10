import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ErrorPage from './components/Error/ErrorPage'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import { productsAndCartData } from './components/loades/getCartAndProductData'
import  { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
     loader: productsAndCartData,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,      
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
       
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
);
