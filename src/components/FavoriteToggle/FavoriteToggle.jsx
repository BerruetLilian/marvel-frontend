import "./favoriteToggle.css";
import { FaHeart } from "react-icons/fa";
import { addFavorite } from "../../utils/favoriteHandler";
import { useState } from "react";
import { removeFavorite } from "../../utils/favoriteHandler";
import { FaRegHeart } from "react-icons/fa6";

const FavoriteToggle = ({ token, element, favorites, setFavorites }) => {
  const initializeFavorite = () => {
    if (!favorites.results) {
      return null;
    }
    for (let favorite of favorites.results) {
      if (favorite.apiId === element._id || favorite.apiId === element.apiId) {
        return favorite;
      }
    }
    return null;
  };
  const [isFavorite, setIsFavorite] = useState(initializeFavorite());
  const handleAddFavorite = async (event) => {
    event.stopPropagation();
    if (!isFavorite) {
      const type = element.name ? "character" : "comic";
      addFavorite(token, element._id, type, (data) => {
        console.log(data);

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
    <div className="favorite-toggle">
      {isFavorite ? (
        <FaHeart
          onClick={(event) => {
            handleAddFavorite(event);
          }}
          style={{ color: "red" }}
        />
      ) : (
        <FaRegHeart
          onClick={(event) => {
            handleAddFavorite(event);
          }}
          style={{ color: "black" }}
        />
      )}
    </div>
  );
};
export default FavoriteToggle;
