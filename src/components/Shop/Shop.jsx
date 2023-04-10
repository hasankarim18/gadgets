import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { addToDb } from '../utils/fakeDB.JS';
import { CartContext, ProductContext } from '../../App';
import { toast } from 'react-hot-toast';



const Shop = () => {
    const {cart, setCart} = useContext(CartContext) || []

   const productsData = useContext(ProductContext)

   const handleAddToCart = (product)=> {
     //   console.log(id);
        let newCart = []   

        const exists = cart.find(
          (existingProduct) => existingProduct.id === product.id
        ); 

        if(!exists) {
          product.quantity = 1
          newCart = [...cart, product]
        }else {
          const rest = cart.filter(
            (existingProduct) => existingProduct.id !== product.id
          );
          exists.quantity = exists.quantity + 1 
          newCart = [...rest, exists]
        }
        toast.success("Product added. 👍")
        setCart(newCart)
        addToDb(product.id)
   }

    return (
      <div className="product-container my-container">
        {productsData.map((product) => {
          return (
            <ProductCard
              handleAddToCart={handleAddToCart}
              product={product}
              key={product.id}
            />
          );
        })}
      </div>
    );
};

export default Shop;