import { useContext } from "react";
import { cartContext } from "../usecontext/cartContext";

export default function CartSummary() {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div>
      <h2>Cart Summary</h2>
      {state.cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - Rs.{item.price}
          </p>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item })
            }
          >
            Remove
          </button>
        </div>
      ))}
      <h3>
        Total: Rs.
        {state.cart.reduce((total, item) => total + item.price, 0)}
      </h3>
    </div>
  );
}
