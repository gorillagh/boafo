"use client";
import { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, clearToken } from "@/lib/auth";
;
import { clearCache, getCachedTransactions, getCachedUser, isCacheValid } from "./DashboardCache";
import { fetchDashboardData, upgradeUserPlan } from "./DashboardActions";

export const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => getCachedUser());
  const [transactions, setTransactions] = useState(() =>
    getCachedTransactions()
  );
  const [loading, setLoading] = useState(() => !user || !isCacheValid());

  const fetchData = useCallback(() => {
    return fetchDashboardData(setUser, setTransactions, setLoading, navigate);
  }, [navigate]);

  const logout = useCallback(() => {
    clearToken();
    clearCache();
    setUser(null);
    setTransactions([]);
    navigate("/login");
  }, [navigate]);

  const upgradePlan = useCallback(
    () => upgradeUserPlan(fetchData),
    [fetchData]
  );

  useEffect(() => {
    if (!getToken()) {
      logout();
    } else if (!user || !isCacheValid()) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DashboardContext.Provider
      value={{
        user,
        transactions,
        loading,
        plan: user?.plan || "free",
        logout,
        upgradePlan,
        fetchDashboardData: fetchData,
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
