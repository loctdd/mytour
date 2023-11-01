import { Link } from 'react-router-dom';
import logo from "../images/app-logo.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link className="header-logo__link" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
