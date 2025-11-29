import "./comicCard.css";
import getThumbnailUrl from "../../utils/getThumbnailUrl.js";
import { Link } from "react-router-dom";
import FavoriteToggle from "../FavoriteToggle/FavoriteToggle.jsx";

const ComicCard = ({ token, comic, favorites, setFavorites }) => {
  return (
    <div className="comic-card">
      <Link to={"/comic/" + comic._id}>
        <img src={getThumbnailUrl(comic, "portrait_medium")} />
      </Link>
      {comic.title ? <p>{comic.title}</p> : <p>{comic.label}</p>}
      <p>{comic.description}</p>
      <FavoriteToggle
        token={token}
        favorites={favorites}
        setFavorites={setFavorites}
        element={comic}
      />
    </div>
  );
};
export default ComicCard;
