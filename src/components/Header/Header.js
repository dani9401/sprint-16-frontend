import "../Header/Header.css";
import Logo from "../../images/cbm_new-logo_png.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__menu-left">
        <div className="header__logo">
          <img src={Logo} alt="CBM Logo" className="header__logo-image"></img>
        </div>
        <h2 className="header__rescue-name">Colorado Bullies & More Rescue</h2>
      </div>
      <div className="header__menu-right">
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
