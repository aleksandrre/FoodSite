import React, { createContext, useState } from "react";
import { data } from "../data/data";

export const MyContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const Context = (props) => {
  const [state, setState] = useState(true);
  const [foods, setFoods] = useState(data);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  //add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  //remove from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //input change
  const inputchange = (itemId, value) => {
    setCartItems((prev) => ({ ...prev, [itemId]: value }));
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  //filter by type
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  const contextValue = {
    foods,
    setFoods,
    filterType,
    filterPrice,
    addToCart,
    removeFromCart,
    cartItems,
    inputchange,
    state,
    setState,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
};

export default Context;
