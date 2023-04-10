import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React, { createContext,  useState } from "react";
import Modal from "./components/utils/Modal";



export const ProductContext = createContext([])
export const CartContext = createContext([])


const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { cartArray, products } = useLoaderData();
  const [cart, setCart] = useState(cartArray);

  const cartAlert = sessionStorage.getItem('alert') 

  if(cart.length >0 && cartAlert !== 'true'){
    setIsOpen(true)
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
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </>
  );
}

export default App
