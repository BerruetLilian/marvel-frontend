import "./characterCard.css";

const CharacterCard = ({ character }) => {
  return (
    <div>
      <img
        src={
          character.thumbnail.path +
          "/portrait_medium." +
          character.thumbnail.extension
        }
      />
      <p>{character.name}</p>
    </div>
  );
};
export default CharacterCard;
