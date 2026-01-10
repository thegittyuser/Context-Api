import { useState } from "react";

function Checkout({ cartItems }) {
  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Billing Details:", billingDetails);
    console.log("Cart Items:", cartItems);
  };

  return (
    <>
      {/* Billing Details Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <h2>Billing Details</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={billingDetails.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={billingDetails.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={billingDetails.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={billingDetails.address}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={billingDetails.city}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={billingDetails.state}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={billingDetails.zip}
          onChange={handleChange}
          required
        />

        <button type="submit">Place Order</button>
      </form>

      {/* Cart Items */}
      {cartItems.map((item, index) => (
        <div
          className="box"
          style={{ border: "1px solid black", marginBottom: "10px" }}
          key={index}
        >
          <h2>{item.title}</h2>
          <h3>{item.price}</h3>
        </div>
      ))}
    </>
  );
}

export default Checkout;
