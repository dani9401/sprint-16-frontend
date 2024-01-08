import "../Header/Header.css";
import dogPicture from "../../images/pit_homepage.png";
import Nav from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="header__menu-left">
        <div className="header__logo">
          <img
            src={dogPicture}
            alt="picture of adorable pitbull"
            className="header__logo-image"
          ></img>
        </div>
        <h2 className="header__site-name">The Perfect Bark</h2>
        <h3 className="header__site-description">Find your perfect match</h3>
      </div>
      <div className="header__menu-right">
        <Nav></Nav>
        <div className="header__menu-buttons">
          <button
            className="header__button"
            //onClick={onRegisterModal}
            type="text"
          >
            Sign Up
          </button>
          <button
            className="header__button"
            //onClick={onLoginModal}
            type="text"
          >
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
