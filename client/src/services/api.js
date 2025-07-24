import axios from "axios";
const base_api = "http://192.168.18.9:9000/";
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URI || base_api,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
