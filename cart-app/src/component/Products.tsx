import { useContext } from "react";
import { product } from "../data";
import { cartContext } from "../context/CartContext";
const Products = () => {
  const value = useContext(cartContext);
  console.log("value", value);
  return (
    <div>
      <h1>Products</h1>
      {product.map((item, i) => (
        <div key={i} className="flex m-10">
          <p>
            {item.name} - RS. {item.price}
          </p>{" "}
          <button
            className="mx-10"
            onClick={() =>
              value.dispatch({ type: "add_to_cart", payload: item })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
