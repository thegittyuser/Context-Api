function Cart({ cartItems }) {
  return (
    <>
      {cartItems.map((item, index) => (
        <div className="box" style={{ border: "1px solid black" }} key={index}>
          <h2>{item.title}</h2>
          <h3>{item.price}</h3>
        </div>
      ))}
    </>
  );
}
export default Cart;
