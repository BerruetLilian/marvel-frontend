import { useState } from "react";
import { useFetchData } from "../../utils/useFetchData";
import "./comicPage.css";
import ComicCard from "../../components/ComicCard/ComicCard";
import { useParams } from "react-router-dom";

const ComicPage = ({ token, favorites, setFavorites }) => {
  const [loading, setLoading] = useState(true);
  const { comicId } = useParams();
  const data = useFetchData(
    "https://site--marvel-backend--h7xf99wskwy6.code.run/comic/" + comicId,
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
          <ComicCard
            comic={data}
            token={token}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </>
      )}
    </>
  );
};
export default ComicPage;
