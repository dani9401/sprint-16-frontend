const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <a className="nav__link">Login</a>
        </li>
        <li>
          <a className="nav__link">Sign Up</a>
        </li>
        <li>
          <a className="nav__link" href="#aboutus">
            About Us
          </a>
        </li>
        <li>
          <a className="nav__link" href="#contactus">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
