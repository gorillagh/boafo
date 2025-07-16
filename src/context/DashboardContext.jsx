import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import API from "@/lib/axios";
import { getToken, clearToken } from "@/lib/auth";
import { motion, AnimatePresence } from "framer-motion";

const DashboardContext = createContext();
export const useDashboard = () => useContext(DashboardContext);

export function DashboardProvider({ children }) {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchDashboardData = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await API.get("/users/userDashboard");
      if (data.status === "success") {
        setUser(data.user);
        setTransactions(data.transactions || []);
      }
    } catch (err) {
      if (err.response?.status === 401) {
        clearToken();
        toast.error("Session expired. Please log in again.");
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const logout = useCallback(() => {
    clearToken();
    setUser(null);
    setTransactions([]);
    toast.success("Signed out.");
    navigate("/login");
  }, [navigate]);

  const upgradePlan = useCallback(async () => {
    try {
      const res = await API.post("/users/upgrade");
      toast.success(res.data.message);
      await fetchDashboardData();
    } catch {
      toast.error("Upgrade failed.");
    }
  }, [fetchDashboardData]);

  useEffect(() => {
    if (getToken()) fetchDashboardData();
    else {
      setLoading(false);
      navigate("/login");
    }
  }, [fetchDashboardData, navigate]);

  return (
    <DashboardContext.Provider
      value={{
        user,
        transactions,
        loading,
        logout,
        upgradePlan,
        plan: user?.plan || "free",
        onboarding: {
          goals: user?.goals || [],
          contentTypes: user?.contentTypes || [],
          voice: user?.selectedVoice || "",
          readingSpeed: user?.readingSpeed || 1,
          localLanguages: user?.localLanguageInterest ? ["Yes"] : [],
        },
        fetchDashboardData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
