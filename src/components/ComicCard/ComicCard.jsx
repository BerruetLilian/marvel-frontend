import "./comicCard.css";
import getThumbnailUrl from "../../utils/getThumbnailUrl.js";

const ComicCard = ({ comic }) => {
  return (
    <div className="comic-card">
      <img src={getThumbnailUrl(comic, "portrait_medium")} />
      <p>{comic.title}</p>
      <p>{comic.description}</p>
    </div>
  );
};
export default ComicCard;
