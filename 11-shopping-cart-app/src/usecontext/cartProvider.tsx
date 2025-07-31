
//step 02(usecontext) , wrapper

import { cartContext } from "./cartContext";
import { useReducer } from "react";
// step 01
const initialState = {
  cart:[]
}
//step 02 
const reducer = (state,action)=>{

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