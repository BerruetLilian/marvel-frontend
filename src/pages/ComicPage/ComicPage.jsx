import { useState } from "react";
import { useFetchData } from "../../utils/useFetchData";
import "./comicPage.css";
import { useParams } from "react-router-dom";
import getThumbnailUrl from "../../utils/getThumbnailUrl";

const ComicPage = () => {
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
          <div className="comic-page">
            <div className="container">
              <h1>{data.title}</h1>
              <div className="content">
                <img
                  src={getThumbnailUrl(data, "portrait_incredible")}
                  alt="comic illustration"
                />
                <div>
                  <h2>Description :</h2>
                  {data.description ? (
                    <p>{data.description}</p>
                  ) : (
                    <p className="no-results">Pas de description</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ComicPage;
