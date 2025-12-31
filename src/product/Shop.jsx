import Cart from "./Cart";

import { createContext } from "react";

export const productContext = createContext();

function Shop() {
  const title = "Rio Biscuit";
  return (
    <>
      <h1>Shop</h1>
      <h2>Product: {title}</h2>
      {/* <h3>Price: {price}</h3> */}

      <br />

      <productContext.Provider value={title}>
        <Cart />
      </productContext.Provider>
    </>
  );
}
export default Shop;
