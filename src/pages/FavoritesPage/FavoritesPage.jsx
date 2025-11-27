import useFetchData from "../../utils/useFetchData";
import "./favoritesPage.css";
import { useState } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { Navigate } from "react-router-dom";

const FavoritesPage = ({ token }) => {
  const [loading, setLoading] = useState(true);

  const data = useFetchData(
    "https://site--marvel-backend--h7xf99wskwy6.code.run/user/favorites",
    null,
    () => {
      setLoading(false);
    },
    token
  );
  return (
    <>
      {!token ? (
        <Navigate to="/" />
      ) : loading ? (
        <p>Loading dqddq</p>
      ) : (
        <Carrousel data={data} />
      )}
    </>
  );
};
export default FavoritesPage;
