import axios from "axios";

const API = axios.create({
  baseURL:
    "https://boafo-accessibility-services-production-b6b5.up.railway.app",
});

// Automatically attach token to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
