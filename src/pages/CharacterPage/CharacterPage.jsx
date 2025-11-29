import { useState } from "react";
import { useFetchData } from "../../utils/useFetchData";
import "./characterPage.css";
import { useParams } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import ComicCard from "../../components/ComicCard/ComicCard";

const CharacterPage = ({ token, favorites, setFavorites }) => {
  const [loading, setLoading] = useState(true);
  const { characterId } = useParams();
  const data = useFetchData(
    "https://site--marvel-backend--h7xf99wskwy6.code.run/comics/" + characterId,
    () => {
      setLoading(false);
    }
  );
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <CharacterCard
            character={data}
            token={token}
            favorites={favorites}
            setFavorites={setFavorites}
          />
          {data.comics.map((element) => {
            return (
              <ComicCard
                key={element._id}
                token={token}
                favorites={favorites}
                setFavorites={setFavorites}
                comic={element}
              />
            );
          })}
        </>
      )}
    </>
  );
};
export default CharacterPage;
