import "./characterCard.css";
import getThumbnailUrl from "../../utils/getThumbnailUrl.js";
import { Link } from "react-router-dom";
import FavoriteToggle from "../FavoriteToggle/FavoriteToggle.jsx";

const CharacterCard = ({ token, character, favorites, setFavorites }) => {
  return (
    <div className="character-card">
      <Link to={"/character/" + character._id}>
        <img src={getThumbnailUrl(character, "portrait_medium")} />
      </Link>
      {character.name ? <p>{character.name}</p> : <p>{character.label}</p>}
      <p>{character.description}</p>
      <FavoriteToggle
        token={token}
        favorites={favorites}
        setFavorites={setFavorites}
        element={character}
      />
    </div>
  );
};
export default CharacterCard;
