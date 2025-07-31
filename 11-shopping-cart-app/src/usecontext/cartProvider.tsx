
//step 02(usecontext) , wrapper

import { cartContext } from "./cartContext";
import { useReducer } from "react";
// step 01
const initialState = {
  cart:[]
}
//step 02 
function reducer(state: typeof initialState, action: any) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
}
interface props{
    children:React.ReactNode
}

const CartProvider = ({children}:props) => {
  //step 03 
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <cartContext.Provider value={{state,dispatch}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider