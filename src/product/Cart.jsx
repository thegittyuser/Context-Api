import { useContext } from "react";
import { productContext } from "./shop";
function Cart() {
  const title = useContext(productContext);
  return (
    <>
      <h1>Cart</h1>
      <h2>Product: {title}</h2>
    </>
  );
}
export default Cart;
