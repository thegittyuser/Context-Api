import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Shop from "../shop/Shop";
import Cart from "../shop/Cart";
import { useState } from "react";
import Checkout from "../shop/Checkout";
import Orders from "../shop/Orders";

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
          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} />}
          ></Route>
          <Route
            path="/orders"
            element={<Orders cartItems={cartItems} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
export default AppRoutes;
