import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Shop from "../shop/Shop";
import Cart from "../shop/Cart";
import { useState } from "react";

function AppRoutes() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Shop addToCart={addToCart} />}></Route>
          <Route path="/cart" element={<Cart cartItems={cartItems} />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default AppRoutes;
