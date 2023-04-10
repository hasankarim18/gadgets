import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ErrorPage from './components/Error/ErrorPage'
import Shop from './components/Shop/Shop'

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:'/shop',
                element:<Shop />,
                loader:()=> fetch('products.json')
            },
            {
                path:'/about',
                element: <About />
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
