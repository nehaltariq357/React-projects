
//step 02 , wrapper

import { cartContext } from "./cartContext";

interface props{
    children:React.ReactNode
}

const CartProvider = ({children}:props) => {
    const data = "cart data"
  return (
    <cartContext.Provider value={data}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider