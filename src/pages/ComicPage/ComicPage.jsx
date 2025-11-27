import { use, useState } from "react";
import useFetchData from "../../utils/useFetchData";
import "./comicPage.css";
import ComicCard from "../../components/ComicCard/ComicCard";
import { useParams } from "react-router-dom";
import axios from "axios";

const ComicPage = ({ token }) => {
  const [loading, setLoading] = useState(true);
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  const [errorFavorite, setErroFavorite] = useState(false);
  const { comicId } = useParams();
  const data = useFetchData(
    "https://site--marvel-backend--h7xf99wskwy6.code.run/comic/" + comicId,
    null,
    () => {
      setLoading(false);
    }
  );

  const handleAddFavorite = async () => {
    if (!token) {
      setErroFavorite(true);
    } else {
      try {
        setFavoriteLoading(true);
        const response = await axios.post(
          "https://site--marvel-backend--h7xf99wskwy6.code.run/user/favorites/" +
            comicId,
          { type: "comic" },
          { headers: { authorization: "Bearer " + token } }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <ComicCard comic={data} />
          <button onClick={handleAddFavorite} disabled={favoriteLoading}>
            Add to Favorite
          </button>
          {errorFavorite && (
            <p>Vous pouvez ajouter des favoris après vous êtes connecté</p>
          )}
        </>
      )}
    </>
  );
};
export default ComicPage;
