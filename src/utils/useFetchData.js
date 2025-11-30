import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchDataFilter = (
  url,
  urlSearchParams,
  callBack = new Function()
) => {
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

export const useFetchDataToken = (url, token, callBack = new Function()) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          headers: { authorization: "Bearer " + token },
        };

        const response = await axios.get(url, options);
        setData(response.data);
        callBack(response.data);
      } catch (error) {
        if (error.name === "AxiosError") {
          console.log(error.response.data);
        } else {
          console.log(error);
        }
      }
    };
    fetchData();
  }, []);
  return data;
};

export const useFetchData = (url, callBack = new Function()) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
        callBack(response.data);
      } catch (error) {
        if (error.name === "AxiosError") {
          console.log(error.response.data);
        } else {
          console.log(error);
        }
      }
    };
    fetchData();
  }, []);
  return data;
};
