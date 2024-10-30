import DisplayCart from "./DisplayCart";
import GamesList from "./GamesList";
import Intro from "./Intro";
import { useState } from "react";

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

  return (
    <div className="relative">
      <Intro />
      <GamesList cartItems={cartItems} onBuy={handleBuy}  />
      <DisplayCart cartItems={cartItems} onRemove={handleRemove} />

      <div className="absolute top-0 left-0 w-full z-1">

      </div>
    </div>
  );
}

export default App;
