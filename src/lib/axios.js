import axios from "axios";

const API = axios.create({
  baseURL: "https://boafo-accessibility-services-production-b6b5.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
