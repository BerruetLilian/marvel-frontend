import "./searchInput.css";
import { useDebouncedCallback } from "use-debounce";
// import axios from "axios";
// import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchInput = ({ urlSearchParams, setSearchParams, queryName }) => {
  // const [suggestions, setSuggestions] = useState([]);

  const debounceSearch = useDebouncedCallback(async (value) => {
    urlSearchParams.set("page", 1);
    if (value) {
      urlSearchParams.set(queryName, value);
    } else {
      urlSearchParams.delete(queryName);
    }
    setSearchParams(urlSearchParams);
    // try {
    //   const type = queryName === "name" ? "characters" : "comics";
    //   const response = await axios.get(
    //     `https://site--marvel-backend--h7xf99wskwy6.code.run/${type}?limit=4&${queryName}=${value}`
    //   );
    //   setSuggestions(response.data.results);
    // } catch (error) {
    //   if (error.name === "AxiosError") {
    //     console.log(error.response.data);
    //   } else {
    //     console.log(error);
    //   }
    // }
  }, 1000);
  return (
    <div className="search-input">
      <FaMagnifyingGlass />
      <input
        type="text"
        defaultValue={urlSearchParams.get(queryName)}
        onChange={(event) => {
          debounceSearch(event.target.value);
        }}
        placeholder="Rechercher..."
      />
      {/* <div className="suggestion">
        {suggestions.map((element) => {
          return <p key={element._id}>{element.name || element.title}</p>;
        })}
      </div> */}
    </div>
  );
};
export default SearchInput;
