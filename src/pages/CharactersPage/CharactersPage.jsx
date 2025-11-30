import { useState } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import "./charactersPage.css";
import { useSearchParams } from "react-router-dom";
import { useFetchDataFilter } from "../../utils/useFetchData";
import SearchInput from "../../components/SearchInput/SearchInput";

const CharactersPage = ({ favorites, setFavorites, token }) => {
  const [urlSearchParams, setSearchParams] = useSearchParams("?page=1");
  const [loading, setLoading] = useState(true);
  const data = useFetchDataFilter(
    "https://site--marvel-backend--h7xf99wskwy6.code.run/characters",
    urlSearchParams,
    () => {
      setLoading(false);
    }
  );
  return (
    <div className="characters-page">
      <div className="container">
        {loading ? (
          <div>ça laode fort...</div>
        ) : (
          <>
            <SearchInput
              urlSearchParams={urlSearchParams}
              setSearchParams={setSearchParams}
              queryName={"name"}
            />
            <Carrousel
              data={data}
              setSearchParams={setSearchParams}
              urlSearchParams={urlSearchParams}
              favorites={favorites}
              setFavorites={setFavorites}
              token={token}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default CharactersPage;
