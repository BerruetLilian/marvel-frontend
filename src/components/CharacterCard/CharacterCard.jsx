import "./characterCard.css";
import getThumbnailUrl from "../../utils/getThumbnailUrl.js";
import { Link } from "react-router-dom";
import FavoriteToggle from "../FavoriteToggle/FavoriteToggle.jsx";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <Link to={"/character/" + character._id}>
        <img src={getThumbnailUrl(character, "portrait_medium")} />
      </Link>
      <p>{character.name}</p>
      <p>{character.description}</p>
      <FavoriteToggle />
    </div>
  );
};
export default CharacterCard;
