import "./comicsPage.css";
import { useState } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { useSearchParams } from "react-router-dom";
import { useFetchDataFilter } from "../../utils/useFetchData";
import SearchInput from "../../components/SearchInput/SearchInput";

const ComicsPage = ({ favorites, setFavorites, token }) => {
  const [urlSearchParams, setSearchParams] = useSearchParams("?page=1");
  const [loading, setLoading] = useState(true);
  const data = useFetchDataFilter(
    "https://site--marvel-backend--h7xf99wskwy6.code.run/comics",
    urlSearchParams,
    () => {
      setLoading(false);
    }
  );
  return (
    <div className="comics-page">
      <div className="container">
        {loading ? (
          <div>loading...</div>
        ) : (
          <>
            <SearchInput
              urlSearchParams={urlSearchParams}
              setSearchParams={setSearchParams}
              queryName={"title"}
            />
            {data.results.length ? (
              <Carrousel
                data={data}
                setSearchParams={setSearchParams}
                urlSearchParams={urlSearchParams}
                favorites={favorites}
                setFavorites={setFavorites}
                token={token}
              />
            ) : (
              <p className="no-results">Pas de résultats</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default ComicsPage;
