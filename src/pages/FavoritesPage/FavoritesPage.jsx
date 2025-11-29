import "./favoritesPage.css";
import Carrousel from "../../components/Carrousel/Carrousel";
import { Navigate } from "react-router-dom";

const FavoritesPage = ({ token, loading, favorites, setFavorites }) => {
  return (
    <>
      {!token ? (
        <Navigate to="/" />
      ) : loading ? (
        <p>Loading dqddq</p>
      ) : (
        <Carrousel
          data={favorites}
          favorites={favorites}
          setFavorites={setFavorites}
          token={token}
        />
      )}
    </>
  );
};
export default FavoritesPage;
