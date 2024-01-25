import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovie-api-e1up.onrender.com",
});
