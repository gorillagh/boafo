import { toast } from "sonner";
import API from "@/lib/axios";
import { clearToken } from "@/lib/auth";
import { clearCache, saveToCache } from "./DashboardCache";

export async function fetchDashboardData(
  setUser,
  setTransactions,
  setLoading,
  navigate
) {
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
}

export async function upgradeUserPlan(fetchDashboardData, toast) {
  try {
    const res = await API.post("/users/upgrade");
    toast.success(res.data.message);
    await fetchDashboardData(); // Refresh after upgrade
  } catch (err) {
    toast.error("Upgrade failed. Try again.", err);
  }
}
