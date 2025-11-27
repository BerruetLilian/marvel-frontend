import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/img/marvel_logo.png";
import Cookies from "js-cookie";

const Header = ({ setSignInVisible, setSignUpVisible, setToken, token }) => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo marvel" />
      </Link>
      <Link to="/characters">Personnages</Link>
      <Link to="/comics">Comics</Link>
      <Link to="/favorites">Favoris</Link>
      {token ? (
        <button
          onClick={() => {
            setToken(null);
            Cookies.remove("token");
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <>
          {" "}
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
    </header>
  );
};
export default Header;
