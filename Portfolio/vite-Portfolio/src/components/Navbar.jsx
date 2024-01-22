import React from "react";

const Navbar = () => {
  return (
    <div className="border border-black border-solid border-1 h-20 bg-red-200">
      <nav className="flex justify-between container">
        <a href="#">Logo</a>
        <ul className="flex">
          <li>About</li>
          <li>Home</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
