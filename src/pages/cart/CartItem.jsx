import React, { useContext } from "react";
import { MyContext } from "../../Context/Context";

const CartItem = ({ item }) => {
  console.log("CartItem.jsx");
  const { cartItems, removeFromCart, addToCart, inputchange } =
    useContext(MyContext);
  return (
    <div
      key={1}
      className="border shadow-lg rounded-lg hover:scale-105 duration-300"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="flex justify-between px-2 py-4 items-center">
        <p className="font-bold">{item.name}</p>

        <p>
          <span className="bg-orange-500 text-white p-1 rounded-full">
            {item.price + " ლ"}
          </span>
        </p>
      </div>
      <div className="flex justify-center pb-2">
        <button onClick={() => removeFromCart(item.id)}> - </button>
        <input
          type="text"
          value={cartItems[item.id]}
          onChange={(e) => inputchange(item.id, Number(e.target.value))}
          className="text-center w-10"
        />
        <button onClick={() => addToCart(item.id)}> + </button>
      </div>
    </div>
  );
};

export default CartItem;
