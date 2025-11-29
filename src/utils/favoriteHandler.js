import axios from "axios";

export const getFavorites = async (token, callBack) => {
  try {
    const options = {
      headers: { authorization: "Bearer " + token },
    };
    const response = await axios.get(
      "https://site--marvel-backend--h7xf99wskwy6.code.run/user/favorites",
      options
    );
    console.log("getFavorites => ", response.data);
    callBack(response.data);
  } catch (error) {
    if (error.name === "AxiosError") {
      console.log(error.response.data);
    } else {
      console.log(error);
    }
  }
};

export const addFavorite = async (token, id, type, callBack) => {
  try {
    console.log(token, id, type);
    console.log(
      "https://site--marvel-backend--h7xf99wskwy6.code.run/user/favorites/" + id
    );
    const response = await axios.post(
      "https://site--marvel-backend--h7xf99wskwy6.code.run/user/favorites/" +
        id,
      { type: type },
      { headers: { authorization: "Bearer " + token } }
    );
    console.log("addFavorites => ", response.data);
    callBack(response.data.result);
  } catch (error) {
    if (error.name === "AxiosError") {
      console.log(error.response.data);
    } else {
      console.log(error);
    }
  }
};

export const removeFavorite = async (token, id, callBack) => {
  try {
    console.log(token, id);
    console.log(
      "https://site--marvel-backend--h7xf99wskwy6.code.run/user/favorites/" + id
    );
    const response = await axios.delete(
      "https://site--marvel-backend--h7xf99wskwy6.code.run/user/favorites/" +
        id,
      { headers: { authorization: "Bearer " + token } }
    );
    console.log("removeFavorites => ", response.data);
    callBack(response.data);
  } catch (error) {
    if (error.name === "AxiosError") {
      console.log(error.response.data);
    } else {
      console.log(error);
    }
  }
};
