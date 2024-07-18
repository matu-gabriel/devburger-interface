import axios from "axios";

const api = axios.create({
  baseURL: "https://devburger-api-final-production.up.railway.app/",
});

api.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem("devburger:user");
  const token = userData && JSON.parse(userData).token;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
