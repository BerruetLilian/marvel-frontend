import "./searchInput.css";
import { useDebouncedCallback } from "use-debounce";

const SearchInput = ({ urlSearchParams, setSearchParams, queryName }) => {
  const debounceSearch = useDebouncedCallback((value) => {
    urlSearchParams.set("page", 1);
    if (value) {
      urlSearchParams.set(queryName, value);
    } else {
      urlSearchParams.delete(queryName);
    }
    setSearchParams(urlSearchParams);
  }, 1000);
  return (
    <>
      <input
        type="text"
        defaultValue={urlSearchParams.get(queryName)}
        onChange={(event) => {
          debounceSearch(event.target.value);
        }}
      />
    </>
  );
};
export default SearchInput;
