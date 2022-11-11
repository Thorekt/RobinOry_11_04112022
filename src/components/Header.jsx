import logo from "../assets/logo.png";
import Navigation from "./Navigation";
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="kasa" className="kasa-logo" />
      <Navigation/>
    </header>
  );
}

export default Header;