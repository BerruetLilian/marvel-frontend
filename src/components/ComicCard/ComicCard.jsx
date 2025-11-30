import "./comicCard.css";
import getThumbnailUrl from "../../utils/getThumbnailUrl.js";
import { Link } from "react-router-dom";
import FavoriteToggle from "../FavoriteToggle/FavoriteToggle.jsx";
import { useState } from "react";

const ComicCard = ({ token, comic, favorites, setFavorites }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <div
      className="character-card"
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <div className="image-container">
        <img src={getThumbnailUrl(comic, "portrait_medium")} />

        <FavoriteToggle
          token={token}
          favorites={favorites}
          setFavorites={setFavorites}
          element={comic}
        />
        {hovering && (
          <Link to={"/comic/" + comic._id}>
            <p className="description">
              {comic.description || "Pas de description"}
            </p>
          </Link>
        )}
      </div>
      {comic.title ? <h1>{comic.title}</h1> : <h1>{comic.label}</h1>}
    </div>
  );
};
export default ComicCard;
