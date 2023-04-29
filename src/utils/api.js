import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  //   method: "GET",
  //   url: "https://youtube138.p.rapidapi.com/auto-complete/",
  params: {
    // q: "desp",
    hl: "en",
    gl: "US",
  },
  headers: {
    // "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "bb41ffbc94msh8aa34f50cd0ba90p148d28jsn3e3291083edb",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
