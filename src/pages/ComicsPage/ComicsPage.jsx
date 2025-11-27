import "./comicsPage.css";
import { useState } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { useSearchParams } from "react-router-dom";
import useFetchData from "../../utils/useFetchData";
import SearchInput from "../../components/SearchInput/SearchInput";

const ComicsPage = () => {
  const [urlSearchParams, setSearchParams] = useSearchParams("?page=1");
  const [loading, setLoading] = useState(true);
  const data = useFetchData(
    "https://site--marvel-backend--h7xf99wskwy6.code.run/comics",
    urlSearchParams,
    () => {
      setLoading(false);
    }
  );
  return loading ? (
    <div>ça laode fort...</div>
  ) : (
    <>
      <SearchInput
        urlSearchParams={urlSearchParams}
        setSearchParams={setSearchParams}
        queryName={"title"}
      />
      <Carrousel
        data={data}
        setSearchParams={setSearchParams}
        urlSearchParams={urlSearchParams}
      />
    </>
  );
};
export default ComicsPage;
