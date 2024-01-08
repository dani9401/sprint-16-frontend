import "../Header/Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import dogPicture from "../../images/pit_homepage.png";
import Nav from "../Navigation/Navigation";

const Header = ({ onSignUpModal, onLoginModal }) => {
  return (
    <header className="header">
      <div className="header__menu-left">
        <div className="header__logo">
          <Link to="/">
            <img
              src={dogPicture}
              alt="picture of adorable pitbull"
              className="header__logo-image"
            ></img>
          </Link>
        </div>
        <h2 className="header__site-name">The Perfect Bark</h2>
        <h3 className="header__site-description">Find your perfect match</h3>
      </div>
      <div className="header__menu-right">
        <Nav></Nav>
        <div className="header__menu-buttons">
          <button
            className="header__button"
            onClick={onSignUpModal}
            type="text"
          >
            Sign Up
          </button>
          <button className="header__button" onClick={onLoginModal} type="text">
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
