import "./carrousel.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import PageNav from "../PageNav/PageNav";
import ComicCard from "../ComicCard/ComicCard";

const Carrousel = ({ data, setSearchParams, urlSearchParams }) => {
  //FAIRE QQ CHOSE SI RESULTS EST VIDE
  return (
    <>
      <div className="carrousel">
        {data.results.map((element) => {
          if (element.name) {
            return <CharacterCard key={element._id} character={element} />;
          } else {
            return <ComicCard key={element._id} comic={element} />;
          }
        })}
      </div>
      <PageNav
        lastPage={String(Math.ceil(data.count / 100))}
        setSearchParams={setSearchParams}
        urlSearchParams={urlSearchParams}
      />
    </>
  );
};
export default Carrousel;
