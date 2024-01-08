import "../Header/Header.css";
import Logo from "../../images/pit_homepage.png";
import Nav from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="header__menu-left">
        <div className="header__logo">
          <img src={Logo} alt="CBM Logo" className="header__logo-image"></img>
        </div>
        <h2 className="header__rescue-name">CBM Rescue</h2>
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
