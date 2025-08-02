import { toast } from "sonner";
import API from "@/lib/axios";
import { clearToken } from "@/lib/authHelpers";
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
      return true;
    } else {
      throw new Error("Invalid response");
    }
  } catch (err) {
    if (err.response?.status === 401) {
      clearToken();
      clearCache();
      toast.error("Session expired. Please log in again.");
      if (navigate) navigate("/login");
    } else {
      console.error("Dashboard fetch failed:", err);
      toast.error("Failed to load dashboard data.");
    }
    return false;
  } finally {
    setLoading(false);
  }
}
