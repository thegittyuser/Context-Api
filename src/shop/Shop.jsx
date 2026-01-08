import "./Shop.css";

function Shop({ addToCart }) {
  const products = [
    { id: 1, title: "Product 1", price: 5000 },
    { id: 2, title: "Product 2", price: 5000 },
    { id: 3, title: "Product 3", price: 5000 },
    { id: 4, title: "Product 4", price: 5000 },
    { id: 5, title: "Product 5", price: 5000 },
  ];

  return (
    <div className="shop-container">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <h2 className="card-title">{item.title}</h2>
          <h3 className="card-price">Rs {item.price}</h3>
          <button className="card-btn" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
