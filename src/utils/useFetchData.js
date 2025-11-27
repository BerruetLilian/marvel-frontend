import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url, urlSearchParams, callBack) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let filter = "";
        const page = urlSearchParams.get("page");
        const name = urlSearchParams.get("name");
        const title = urlSearchParams.get("title");
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
        if (title) {
          if (!filter) {
            filter += "?title=" + title;
          } else {
            filter += "&title=" + title;
          }
        }
        const response = await axios.get(url + filter);
        setData(response.data);
        callBack();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [urlSearchParams]);
  return data;
};

export default useFetchData;
