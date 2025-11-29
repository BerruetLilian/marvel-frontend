import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url, urlSearchParams, callBack, token = null) => {
  const [data, setData] = useState(null);

  const generateFilter = (urlSearchParams) => {
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
    return filter;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let filter = "";
        if (urlSearchParams) {
          filter = generateFilter(urlSearchParams);
        }
        let options = {};
        if (token) {
          options = { headers: { authorization: "Bearer " + token } };
        }
        const response = await axios.get(url + filter, options);

        setData(response.data);
        callBack();
      } catch (error) {
        if (error.name === "AxiosError") {
          console.log(error.response.data);
        } else {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [urlSearchParams]);
  return data;
};

const useFetchDataFilter = (
  url,
  urlSearchParams,
  callBack = new Function()
) => {
  const [data, setData] = useState(null);

  const generateFilter = (urlSearchParams) => {
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
    return filter;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let filter = "";
        if (urlSearchParams) {
          filter = generateFilter(urlSearchParams);
        }
        const response = await axios.get(url + filter);
        setData(response.data);
        callBack();
      } catch (error) {
        if (error.name === "AxiosError") {
          console.log(error.response.data);
        } else {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [urlSearchParams]);
  return data;
};

export default useFetchData;
