import "./favoritesPage.css";
import Carrousel from "../../components/Carrousel/Carrousel";
import { Navigate } from "react-router-dom";

const FavoritesPage = ({ token, loading, favorites, setFavorites }) => {
  return (
    <>
      {!token ? (
        <Navigate to="/" />
      ) : (
        <div className="favorites-page">
          <div className="container">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {favorites.results.length ? (
                  <Carrousel
                    data={favorites}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    token={token}
                  />
                ) : (
                  <p className="no-results">Pas de Favoris</p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default FavoritesPage;
