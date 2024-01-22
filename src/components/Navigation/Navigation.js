import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <Link to="/#about" className="nav__link">
            About
          </Link>
        </li>
        <li>
          <Link to="/#contact" className="nav__link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
