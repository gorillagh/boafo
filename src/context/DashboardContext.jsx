"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import API from "@/lib/axios";
import { clearToken, getToken } from "@/lib/auth";

const DashboardContext = createContext();
export const useDashboard = () => useContext(DashboardContext);

// LocalStorage Keys & TTL
const LOCAL_USER_KEY = "boafo.user";
const LOCAL_TXNS_KEY = "boafo.txns";
const LOCAL_TIMESTAMP_KEY = "boafo.timestamp";
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

function isCacheValid() {
  const saved = localStorage.getItem(LOCAL_TIMESTAMP_KEY);
  return saved && Date.now() - parseInt(saved) < CACHE_TTL;
}

export function DashboardProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const cached = localStorage.getItem(LOCAL_USER_KEY);
    return cached ? JSON.parse(cached) : null;
  });

  const [transactions, setTransactions] = useState(() => {
    const cached = localStorage.getItem(LOCAL_TXNS_KEY);
    return cached ? JSON.parse(cached) : [];
  });

  const [loading, setLoading] = useState(() => !user || !isCacheValid());

  const saveToCache = (userData, txns) => {
    localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(userData));
    localStorage.setItem(LOCAL_TXNS_KEY, JSON.stringify(txns || []));
    localStorage.setItem(LOCAL_TIMESTAMP_KEY, Date.now().toString());
  };

  const clearCache = () => {
    localStorage.removeItem(LOCAL_USER_KEY);
    localStorage.removeItem(LOCAL_TXNS_KEY);
    localStorage.removeItem(LOCAL_TIMESTAMP_KEY);
  };

  const fetchDashboardData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await API.get("/users/userDashboard");

      if (res.data?.status === "success") {
        setUser(res.data.user);
        setTransactions(res.data.transactions || []);
        saveToCache(res.data.user, res.data.transactions);
      } else {
        throw new Error("Invalid response");
      }
    } catch (err) {
      if (err.response?.status === 401) {
        clearToken();
        clearCache();
        toast.error("Session expired. Please log in again.");
        navigate("/login");
      } else {
        toast.error("Failed to load dashboard data.");
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const logout = useCallback(() => {
    clearToken();
    clearCache();
    setUser(null);
    setTransactions([]);
    toast.success("Signed out.");
    navigate("/login");
  }, [navigate]);

  const upgradePlan = useCallback(async () => {
    try {
      const res = await API.post("/users/upgrade");
      toast.success(res.data.message);
      await fetchDashboardData(); // Refresh after upgrade
    } catch (err) {
      toast.error("Upgrade failed. Try again.",err);
    }
  }, [fetchDashboardData]);

  // On mount, fetch fresh data if no token or cache expired
  useEffect(() => {
    if (!getToken()) {
      logout(); // ensure redirection
    } else if (!user || !isCacheValid()) {
      fetchDashboardData();
    } else {
      setLoading(false); // valid cache
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        user,
        transactions,
        plan: user?.plan || "free",
        loading,
        logout,
        upgradePlan,
        fetchDashboardData,
        onboarding: {
          goals: user?.goals || [],
          contentTypes: user?.contentTypes || [],
          voice: user?.selectedVoice || "",
          readingSpeed: user?.readingSpeed || 1,
          localLanguages: user?.localLanguageInterest ? ["Yes"] : [],
        },
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
