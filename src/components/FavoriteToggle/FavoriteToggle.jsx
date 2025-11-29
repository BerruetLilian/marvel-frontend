import "./favoriteToggle.css";
import { FaHeart } from "react-icons/fa";
import { addFavorite } from "../../utils/favoriteHandler";
import { useState } from "react";
import { removeFavorite } from "../../utils/favoriteHandler";

const FavoriteToggle = ({ token, element, favorites, setFavorites }) => {
  const initializeFavorite = () => {
    for (let favorite of favorites.results) {
      if (favorite.apiId === element._id || favorite.apiId === element.apiId) {
        return favorite;
      }
    }
    return null;
  };
  const [isFavorite, setIsFavorite] = useState(initializeFavorite());
  const handleAddFavorite = async () => {
    if (!isFavorite) {
      const type = element.name ? "character" : "comic";
      addFavorite(token, element._id, type, (data) => {
        const copy = { ...favorites };
        copy.results.push(data);
        copy.count++;
        setFavorites(copy);
        setIsFavorite(data);
      });
    } else {
      removeFavorite(token, isFavorite._id, () => {
        const copy = { ...favorites };
        copy.results.splice(favorites.results.indexOf(isFavorite), 1);
        copy.count--;
        setFavorites(copy);
        setIsFavorite(null);
      });
    }
  };
  return (
    <div>
      <FaHeart
        onClick={handleAddFavorite}
        style={isFavorite ? { color: "red" } : { color: "green" }}
      />
    </div>
  );
};
export default FavoriteToggle;
