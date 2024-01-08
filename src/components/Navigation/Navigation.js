const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <a className="nav__link" href="#recipes">
            Login
          </a>
        </li>
        <li>
          <a className="nav__link" href="#booktable">
            Sign Up
          </a>
        </li>
        <li>
          <a className="nav__link" href="#menu">
            About Us
          </a>
        </li>
        <li>
          <a className="nav__link" href="#contacts">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
