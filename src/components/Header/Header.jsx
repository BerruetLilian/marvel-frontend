import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/img/marvel_logo.png";
import Cookies from "js-cookie";

const Header = ({ setSignInVisible, setSignUpVisible, setToken, token }) => {
  return (
    <header>
      <div className="container">
        <div className="nav-btn">
          <Link to="/">
            <img src={logo} alt="logo marvel" />
          </Link>
          <Link to="/characters">Personnages</Link>
          <Link to="/comics">Comics</Link>
          <Link to="/favorites">Favoris</Link>
        </div>
        <div className="auth-btn">
          {token ? (
            <button
              onClick={() => {
                setToken(null);
                Cookies.remove("token");
              }}
              className="logout-btn"
            >
              Se déconnecter
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setSignInVisible(true);
                }}
              >
                Se connecter
              </button>
              <button
                onClick={() => {
                  setSignUpVisible(true);
                }}
              >
                Créer un compte
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
