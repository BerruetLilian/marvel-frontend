import "./comicCard.css";
import getThumbnailUrl from "../../utils/getThumbnailUrl.js";
import { Link } from "react-router-dom";

const ComicCard = ({ comic }) => {
  return (
    <div className="comic-card">
      <Link to={"/comic/" + comic._id}>
        <img src={getThumbnailUrl(comic, "portrait_medium")} />
      </Link>
      <p>{comic.title}</p>
      <p>{comic.description}</p>
    </div>
  );
};
export default ComicCard;
