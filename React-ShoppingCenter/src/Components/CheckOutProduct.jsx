// CheckOutProducts component
import React from "react";

const CheckOutProducts = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product, index) => (
          // <li key={index}>{product.title}</li>
          <image key={index} src={product.images[0]} />
        ))}
      </ul>
    </div>
  );
};

export default CheckOutProducts;
