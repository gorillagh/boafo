import axios from "axios";
import { getToken, clearToken } from "./authHelpers";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // Optional: sends cookies if needed
});

// Attach token on every request
API.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Optional: Handle 401 errors globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearToken(); // Remove invalid token
      window.location.href = "/signIn"; // Redirect to login
    }
    return Promise.reject(error);
  }
);

export default API;
