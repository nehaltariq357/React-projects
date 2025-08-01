import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";

const CartSummary = () => {
  const value = useContext(cartContext);
  return (
    <div>
      <h1>CartSummary</h1>
      {value.state.cart.map((item, i) => (
        <div key={i}>
          {item.name} - RS {item.price}{" "}
          <button
            onClick={() =>
              value.dispatch({ type: "remove_from_cart", payload: item })
            }
          >
            remove from cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartSummary;
