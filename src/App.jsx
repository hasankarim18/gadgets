import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React, { createContext, useEffect, useState } from "react";



export const ProductContext = createContext([])
export const CartContext = createContext([])


const App = () => {
  const { cartArray, products } = useLoaderData();
  const [cart, setCart] = useState(cartArray);

  const cartAlert = sessionStorage.getItem('alert') 

  if(cart.length >0 && cartAlert !== 'true'){
    alert('You have items in cart')
    sessionStorage.setItem('alert', true)
  }
  
  return (
    <>
      <ProductContext.Provider value={products}>
        <CartContext.Provider value={{ cart, setCart }}>
          <Header />
          <div className="min-h-[calc(100vh-137px)]">
            <Outlet />
          </div>
          <Footer />
        </CartContext.Provider>
      </ProductContext.Provider>
    </>
  );
}

export default App
