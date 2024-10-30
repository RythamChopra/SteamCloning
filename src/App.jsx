import DisplayCart from "./DisplayCart";
import GamesList from "./GamesList";
import { useState } from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Intro from "./Intro" ; 

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleBuy = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.title === item.title);
    if (!isItemInCart) {
      setCartItems([...cartItems, item]);
    } else {
      console.log("Item already in Cart");
    }
  };

  const handleRemove = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.title !== item.title);
    setCartItems(updatedCart);
  };

  const router = createBrowserRouter([
    {
      path: "/" , 
      element: (
        <>
        <Intro />
        <GamesList cartItems={cartItems} onBuy={handleBuy}  />
        </>
      ) , 
    } , 
    {
      path: "/cart" , 
      element: (
        <>
        <Intro />
        <DisplayCart cartItems={cartItems} onRemove={handleRemove} />
        </>
      ) , 
    } , 
  ]) ; 

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
