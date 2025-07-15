import API from "@/lib/axios";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const normalizeUser = (user) => {
    return {
      ...user,
      avatarUrl: user.avatarUrl?.startsWith("http")
        ? user.avatarUrl
        : user.avatarUrl
        ? `https://boafo-accessibility-services-production-b6b5.up.railway.app${user.avatarUrl}`
        : "",
    };
  };

  const fetchDashboardData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get("/users/userDashboard");
      if (response.data.status === "success") {
        const normalizedUser = normalizeUser(response.data.user);
        setUser(normalizedUser);
        setTransactions(response.data.transactions);
      }
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      if (error.response?.status === 401) {
        localStorage.removeItem("accessToken");
        setUser(null);
        setTransactions([]);
        navigate("/login");
        toast.error("Session expired. Please log in again.");
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    setUser(null);
    setTransactions([]);
    toast.success("You have been signed out.");
    navigate("/login");
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
    logout,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
