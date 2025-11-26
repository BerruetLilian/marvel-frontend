import "./carrousel.css";
import CharacterCard from "../CharacterCard/CharacterCard";

const Carrousel = ({ data }) => {
  return (
    <>
      {data.map((element, index) => {
        if (index === 0) {
          console.log(element);
        }
        return <CharacterCard key={element._id} character={element} />;
      })}
    </>
  );
};
export default Carrousel;
