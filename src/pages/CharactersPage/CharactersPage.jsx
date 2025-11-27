import { useEffect, useState } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import axios from "axios";
import "./charactersPage.css";
import { useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

const CharactersPage = () => {
  const [urlSearchParams, setSearchParams] = useSearchParams("?page=1");
  const debounceSearch = useDebouncedCallback((value) => {
    urlSearchParams.delete("name");
    urlSearchParams.delete("page");
    urlSearchParams.append("page", 1);
    if (value) {
      urlSearchParams.append("name", value);
    }
    setSearchParams(urlSearchParams);
  }, 1000);
  const [characters, setCharacters] = useState(null);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let filter = "";
        const page = urlSearchParams.get("page");
        const name = urlSearchParams.get("name");
        if (page) {
          filter += "?skip=" + 100 * (page - 1);
        }
        if (name) {
          if (!filter) {
            filter += "?name=" + name;
          } else {
            filter += "&name=" + name;
          }
        }
        const response = await axios.get(
          "https://site--marvel-backend--h7xf99wskwy6.code.run/characters" +
            filter
        );
        console.log(
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
    <>
      <input
        type="text"
        onChange={(event) => {
          debounceSearch(event.target.value);
        }}
      />
      <p>actual: {urlSearchParams.get("name")}</p>
      <Carrousel
        data={characters}
        count={count}
        currentPage={urlSearchParams.get("page") || 1}
        setSearchParams={setSearchParams}
        urlSearchParams={urlSearchParams}
      />
    </>
  );
};
export default CharactersPage;
