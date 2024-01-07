import "../style/NavBar.scss";

import { useState } from "react";

const NavBar = ({ cart }) => {
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  const CartItem = () => {
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

  return (
    <>
      <nav className="navCointainer container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <h1>Logo</h1>

        <ul>
          <li>Account</li>
          <li>
            {" "}
            <button onClick={toggleCart}> Cart </button>{" "}
          </li>
        </ul>
      </nav>

      {isCartVisible && (
        <div className="Cart__productContainer">
          <CartItem />
        </div>
      )}
    </>
  );
};

export default NavBar;
