import "../Navigation/Navigation.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <a className="nav__link" href="#about">
            About
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
