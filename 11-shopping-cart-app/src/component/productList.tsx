import { useContext } from "react";
import { cartContext } from "../usecontext/cartContext";

const products = [
  { id: 1, name: "Apple", price: 100 },
  { id: 2, name: "Banana", price: 50 },
  { id: 3, name: "Mango", price: 150 },
];
console.log(products)
export default function ProductList() {
  const value = useContext(cartContext);
console.log(cartContext)
  return (
    <div>
      <h2>Products</h2>
      {products.map((items,i)=>(
        <div key={i}>
            <p>
                {items.name} - Rs. {items.price}
            </p>
            <button onClick={()=>value.dispatch({type:"ADD_TO_CART"})}>
                Add To cart
            </button>
        </div>
      ))}
    </div>
  );
}
