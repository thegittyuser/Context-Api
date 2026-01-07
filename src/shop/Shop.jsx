function Shop({ addToCart }) {
  const products = [
    { id: 1, title: "Product 1", price: 5000 },
    { id: 2, title: "Product 2", price: 5000 },
    { id: 3, title: "Product 3", price: 5000 },
    { id: 4, title: "Product 4", price: 5000 },
    { id: 5, title: "Product 5", price: 5000 },
  ];
  return (
    <>
      {products.map((item) => (
        <div
          className="box"
          style={{ border: "1px solid black" }}
          key={item.id}
        >
          <h2>{item.title}</h2>
          <h3>{item.price}</h3>
          <button onClick={() => addToCart}>Add to Cart</button>
        </div>
      ))}
    </>
  );
}
export default Shop;
