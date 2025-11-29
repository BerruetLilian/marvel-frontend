import "./favoriteToggle.css";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

const FavoriteToggle = ({ token, id }) => {
  const handleAddFavorite = async () => {
    try {
      const response = await axios.get(url, options);
      console.log(response.data);
    } catch (error) {
      if (error.name === "AxiosError") {
        console.log(error.response.data);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <FaHeart onClick={handleAddFavorite} />
    </div>
  );
};
export default FavoriteToggle;
