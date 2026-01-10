import { useNavigate } from "react-router-dom";
function Cart({ cartItems }) {
  const navigate = useNavigate();
  return (
    <>
      {cartItems.map((item, index) => (
        <div className="box" style={{ border: "1px solid black" }} key={index}>
          <h2>{item.title}</h2>
          <h3>{item.price}</h3>
          <button onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </div>
      ))}
    </>
  );
}
export default Cart;
