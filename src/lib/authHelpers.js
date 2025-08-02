// src/lib/authHelpers.js
import { clearCache } from "@/context/dashboard/DashboardCache";

export const saveToken = (token) => {
  localStorage.setItem("accessToken", token);
};

export const getToken = () => {
  return localStorage.getItem("accessToken");
};

export const clearToken = () => {
  localStorage.removeItem("accessToken");
};


export function performLogout(navigate, setUser = null) {
  clearToken();
  clearCache();
  if (typeof setUser === "function") {
    setUser(null);
  }
  navigate("/login");
}


// utils/openChromeStore.js
export const openChromeExtensionStore = (url, onComplete, delay = 2000) => {
  window.open(url, "_blank", "noopener,noreferrer");
  console.log("Redirecting to Chrome Web Store...");
  setTimeout(() => {
    if (onComplete) onComplete();
  }, delay);
};
