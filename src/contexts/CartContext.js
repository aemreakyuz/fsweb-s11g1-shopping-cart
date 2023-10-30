import { createContext } from "react";
import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useLocalStorage("s11G1Cart", []);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart, item]);
  };

  function removeItem(itemIndex) {
    console.log("rem", itemIndex);

    const newCart = cart.filter((item, idx) => {
      return idx !== itemIndex;
    });

    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
