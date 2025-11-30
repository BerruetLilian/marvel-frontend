import { useState } from "react";
import { useFetchData } from "../../utils/useFetchData";
import "./characterPage.css";
import { useParams } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import ComicCard from "../../components/ComicCard/ComicCard";
import getThumbnailUrl from "../../utils/getThumbnailUrl";

const CharacterPage = ({ token, favorites, setFavorites }) => {
  const [loading, setLoading] = useState(true);
  const { characterId } = useParams();
  const data = useFetchData(
    "https://site--marvel-backend--h7xf99wskwy6.code.run/comics/" + characterId,
    () => {
      setLoading(false);
    }
  );
  console.log(data);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <div className="character-page">
            <div className="container">
              <h1>{data.name}</h1>
              <img
                src={getThumbnailUrl(data, "portrait_incredible")}
                alt="character illustration"
              />
              {data.description ? (
                <>
                  <h2>Description: </h2>
                  <p>{data.description}</p>
                </>
              ) : (
                <p className="no-results">Pas de description</p>
              )}
              <h2>Comics :</h2>
              <div className="character-comics">
                {data.comics.length ? (
                  data.comics.map((element) => {
                    return (
                      <ComicCard
                        key={element._id}
                        token={token}
                        favorites={favorites}
                        setFavorites={setFavorites}
                        comic={element}
                      />
                    );
                  })
                ) : (
                  <p className="no-results">Pas de comics</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default CharacterPage;
