import { useEffect, useState } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import axios from "axios";
import "./charactersPage.css";
import { useSearchParams } from "react-router-dom";

const CharactersPage = () => {
  const [urlSearchParams, setSearchParams] = useSearchParams("?page=1");
  const [characters, setCharacters] = useState(null);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let filter = "";
        const page = urlSearchParams.get("page");
        if (page) {
          filter += "?skip=" + 100 * (page - 1);
        }
        const response = await axios.get(
          "https://site--marvel-backend--h7xf99wskwy6.code.run/characters" +
            filter
        );
        setCharacters(response.data.results);
        setCount(response.data.count);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [urlSearchParams]);
  return loading ? (
    <div>ça laode fort...</div>
  ) : (
    <Carrousel
      data={characters}
      count={count}
      currentPage={urlSearchParams.get("page") || 1}
      setSearchParams={setSearchParams}
    />
  );
};
export default CharactersPage;
