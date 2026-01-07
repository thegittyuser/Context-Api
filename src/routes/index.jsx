import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

function AppRoutes() {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart((prev) => [...prev, cart]);
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Shop addToCart={addToCart} />}></Route>
          <Route path="/cart" element={<Cart cart={cart} />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default AppRoutes;
