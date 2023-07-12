import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { MyContext } from "../../Context/Context";
import { data } from "../../data/data";
import CartItem from "./CartItem";

const Cart = () => {
  console.log("Cart.jsx");
  const { cartItems } = useContext(MyContext);
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <Link to="/">
          <button>back to shop</button>
        </Link>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4  ">
          {data.map((item, index) => {
            // console.log(cartItems[item.id]);
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
