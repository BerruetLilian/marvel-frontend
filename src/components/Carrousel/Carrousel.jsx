import "./carrousel.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import PageNav from "../PageNav/PageNav";
import ComicCard from "../ComicCard/ComicCard";

const Carrousel = ({
  data,
  setSearchParams,
  urlSearchParams,
  favorites,
  setFavorites,
  token,
}) => {
  //FAIRE QQ CHOSE SI RESULTS EST VIDE
  return (
    <>
      <div className="carrousel">
        {data.results.map((element) => {
          if (element.type === "character") {
            return (
              <CharacterCard
                key={element._id}
                character={element}
                favorites={favorites}
                setFavorites={setFavorites}
                token={token}
              />
            );
          }
          if (element.type === "comic") {
            return (
              <ComicCard
                key={element._id}
                comic={element}
                favorites={favorites}
                setFavorites={setFavorites}
                token={token}
              />
            );
          }
          if (element.name) {
            return (
              <CharacterCard
                key={element._id}
                character={element}
                favorites={favorites}
                setFavorites={setFavorites}
                token={token}
              />
            );
          } else {
            return (
              <ComicCard
                key={element._id}
                comic={element}
                favorites={favorites}
                setFavorites={setFavorites}
                token={token}
              />
            );
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
