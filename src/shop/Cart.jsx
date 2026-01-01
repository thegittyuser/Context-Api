import { useContext } from "react";
import { cartContext } from "./Shop";
function Cart() {
  const productTitle = useContext(cartContext);
  return (
    <>
      <h1>Cart</h1>
      <h2>Product: {productTitle}</h2>
    </>
  );
}
export default Cart;
