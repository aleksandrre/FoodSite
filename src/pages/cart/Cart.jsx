import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { MyContext } from "../../Context/Context";
import { data } from "../../data/data";
import CartItem from "./CartItem";

const Cart = () => {
  console.log("Cart.jsx");
  const { cartItems } = useContext(MyContext);
  const propertyNames = Object.values(cartItems);

  const amountPrice = () => {
    let amount = 0;
    propertyNames.map((item, index) => {
      amount = amount + item * data[index].price;
    });
    return amount;
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center  pt-7 gap-2  ">
        <Link to="/">
          <button className="hover:bg-red-400   hover:text-white font-bold">
            back to shop
          </button>
        </Link>
        <h1 className="p-1 font-bold">
          {"Amount: " + amountPrice() + " ლარი"}
        </h1>
        <button className="hover:bg-amber-600 hover:text-white">
          confirm order
        </button>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4  ">
          {data.map((item, index) => {
            if (cartItems[item.id] !== 0) {
              return <CartItem key={index} item={item} cartItems={cartItems} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
