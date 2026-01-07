import { Link } from "react-router-dom";

function Header() {
  const headerStyle = {
    display: "flex",
    gap: "20px",
    padding: "16px",
    backgroundColor: "#222",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  };

  return (
    <div style={headerStyle}>
      <Link to="/" style={linkStyle}>
        Shop
      </Link>
      <Link to="/cart" style={linkStyle}>
        Cart
      </Link>
    </div>
  );
}

export default Header;
