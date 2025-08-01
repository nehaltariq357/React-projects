import { useReducer } from "react";
import { cartContext } from "./CartContext";
const initialState = { cart: [], user: "nehal", total: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "remove_from_cart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
