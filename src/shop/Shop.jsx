import { createContext } from "react";
import Cart from "./Cart";
export const cartContext = createContext();

function Shop() {
  const productTitle = "Super Biscuit";
  return (
    <>
      <h1>Shop Now</h1>
      <h2>Product: {productTitle}</h2>
      <h2>Product Price</h2>
      <button>Add to Cart</button>

      <br />
      <br />
      <cartContext.Provider value={productTitle}>
        <Cart />
      </cartContext.Provider>
    </>
  );
}
export default Shop;
