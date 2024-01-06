import "../style/NavBar.scss";

import { useState } from "react";

const NavBar = () => {
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
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
          <h2>Add to Cart Section</h2>
        </div>
      )}
    </>
  );
};

export default NavBar;
