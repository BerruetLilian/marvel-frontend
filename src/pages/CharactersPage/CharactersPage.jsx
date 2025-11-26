import { useEffect, useState } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import axios from "axios";
import "./charactersPage.css";

const CharactersPage = () => {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--h7xf99wskwy6.code.run/characters"
        );
        console.log(response.data);

        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return loading ? (
    <div>ça laode fort...</div>
  ) : (
    <Carrousel data={characters} />
  );
};
export default CharactersPage;
