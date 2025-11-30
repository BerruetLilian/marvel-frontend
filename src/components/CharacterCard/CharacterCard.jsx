import "./characterCard.css";
import getThumbnailUrl from "../../utils/getThumbnailUrl.js";
import { Link } from "react-router-dom";
import FavoriteToggle from "../FavoriteToggle/FavoriteToggle.jsx";
import { useState } from "react";

const CharacterCard = ({ token, character, favorites, setFavorites }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <div
      className="character-card"
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <div className="image-container">
        <img src={getThumbnailUrl(character, "portrait_medium")} />

        <FavoriteToggle
          token={token}
          favorites={favorites}
          setFavorites={setFavorites}
          element={character}
        />
        {hovering && (
          <Link to={"/character/" + character._id}>
            <p className="description">
              {character.description || "Pas de description"}
            </p>
          </Link>
        )}
      </div>
      {character.name ? <h1>{character.name}</h1> : <h1>{character.label}</h1>}
    </div>
  );
};
export default CharacterCard;
