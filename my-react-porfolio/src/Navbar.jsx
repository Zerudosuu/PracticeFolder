import "./style/Navbar.scss";

const NavbarComponent = () => {
  return (
    <>
      <div className="navbarWrapper">
        <nav className="container">
          <h1>Ron.</h1>
          <ul>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>

          <button className="btn">Hire me</button>
        </nav>
      </div>
    </>
  );
};

export default NavbarComponent;
