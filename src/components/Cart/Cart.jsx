import React, { useContext } from 'react';
import { getStoredCart } from "../utils/fakeDB.JS";
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { removeFromDb } from '../utils/fakeDB.JS';
import { deleteShoppingCart } from '../utils/fakeDB.JS';
import { CartContext } from '../../App';

const Cart = () => {
  

   const {cart, setCart} = useContext(CartContext) || []
   // console.log(cartArray);
   const cartArray = cart
   let total = 0;

   if(cartArray.length > 0){
    for(const product of cartArray){
        total = total + product.price * product.quantity
    }
   }

   // remove from shopping cart 
   const handleRemoveIem = (id)=> {
    const remaining = cart.filter(product => product.id !== id)
    setCart(remaining)
    removeFromDb(id)
   }

   const deleteCartHandler = ()=> {
    setCart([])
    deleteShoppingCart()
   }

    return (
      <>
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-900">
          {/* <div className="flex flex-col max-w-3xl p-6 space-y-4 s">

           </div> */}
          <h2 className="text-3xl font-semibold">
            {cartArray.length ? "Review cart items" : "Cart is empty"}
          </h2>
          <ul className="flex divide-solid divide-cyan-400 divide-y-2 flex-col justify-center items-center ">
            {cartArray.map((product) => (
              <CartItem
                handleRemoveIem={handleRemoveIem}
                key={product.id}
                product={product}
              />
            ))}
          </ul>
          <div className="space-y-1 text-right">
            <p>
              <span className="font-semibold">Total amount: </span>{" "}
              <span className="font-bold">{total}$</span>
            </p>
            <p className="text-sm text-gray-400">
              Non including taxes and shipping costs
            </p>
            <div className="felx justify-end space-x-4">
              {cartArray.length > 0 ? (
                <button onClick={deleteCartHandler} className="btn-outlined">
                  Clear Cart
                </button>
              ) : (
                <Link to="/shop" className="btn-outlined">
                  Back To Shop
                </Link>
              )}
              <button className="btn-primary">Place Order </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default Cart;