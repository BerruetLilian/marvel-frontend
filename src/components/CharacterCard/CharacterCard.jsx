import "./characterCard.css";
import getThumbnailUrl from "../../utils/getThumbnailUrl.js";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={getThumbnailUrl(character, "portrait_medium")} />
      <p>{character.name}</p>
      <p>{character.description}</p>
    </div>
  );
};
export default CharacterCard;
