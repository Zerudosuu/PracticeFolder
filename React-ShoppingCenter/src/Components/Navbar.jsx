import "../style/NavBar.scss";

import { useState } from "react";

const NavBar = ({ cart }) => {
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  const CartItem = () => {
    return (
      <div className="AddToCartContainer">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((product, index) => (
            <img key={product.id} src={product.images[0]} />
          ))}
        </ul>
      </div>
    );
  };

  console.log(cart);
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
