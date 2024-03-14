import axios from "axios";

export const movies = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "42d3f8d886180928e42d0cabfb523b63",
    language: "en-US",
  },
  timeout: 60000,
});

export const games = axios.create({
  baseURL: "https://api.rawg.io/api/games",
  params: {
    key: "47fbf08610484225a6b29c7c76dec737",
    page: 1,
  },
});
