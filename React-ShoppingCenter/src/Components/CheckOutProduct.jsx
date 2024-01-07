// CheckOutProducts component
import React from "react";

const CheckOutProducts = ({ cart }) => {
  console.log(cart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CheckOutProducts;
