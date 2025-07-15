// src/context/DashboardContext.jsx
import API from "@/lib/axios";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchDashboardData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get("/users/userDashboard"); // ✅ updated path
      if (response.data.status === "success") {
        setUser(response.data.user);
        setTransactions(response.data.transactions);
      }
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      if (error.response?.status === 401) {
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      fetchDashboardData();
    } else {
      setLoading(false);
      navigate("/login");
    }
  }, [fetchDashboardData, navigate]);

  const value = {
    user,
    setUser,
    transactions,
    loading,
    fetchDashboardData,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
