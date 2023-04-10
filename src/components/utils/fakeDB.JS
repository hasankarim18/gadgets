
// // add data to localstorage 

const addToDb = (id)=> {
   let shoppingCart = {}
   
   // get previous data from database
   const storedCard = localStorage.getItem('shopping-cart')

   if(storedCard){
     shoppingCart = JSON.parse(storedCard)
   }
   // add quantiry 
   const quantity = shoppingCart[id] 
   // check quantiry
   if(quantity){
    const newQuantity = quantity + 1
    shoppingCart[id] = newQuantity
   }else {
    shoppingCart[id]=1
   }

   localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))


}

const getStoredCart = ()=> {

  let shoppingCart = {}
  const storedCart = JSON.parse(localStorage.getItem("shopping-cart"))
  if(storedCart){
    shoppingCart = storedCart
  }

  return shoppingCart

}

const removeFromDb = (id)=> {
    const storedCard = localStorage.getItem("shopping-cart");

    if(storedCard){
      const shoppingCart = JSON.parse(storedCard)
      if(id in shoppingCart){
        delete shoppingCart[id] 
        localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
      }
    }
}

// clear data form local storage

const deleteShoppingCart = ()=> {
  localStorage.removeItem("shopping-cart");
}



 export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart };