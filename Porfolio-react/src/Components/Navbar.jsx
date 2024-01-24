import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Logo</Link>
      <ul className="navbar-list">
        <li>
          <Link to="about">About</Link>
        </li>

        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
