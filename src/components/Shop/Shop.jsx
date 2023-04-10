import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import { addToDb } from '../utils/fakeDB.JS';



const Shop = () => {
    const productsData = useLoaderData()

   // Card Button handler 

   const handleAddToCart = (id)=> {
        console.log(id);
        addToDb(id)
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