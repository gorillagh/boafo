import { toast } from "sonner";
import API from "@/lib/axios";

export async function upgradeUserPlan(fetchDashboardData) {
  try {
    const res = await API.post("/users/upgrade");
    toast.success(res.data.message);
    await fetchDashboardData(); // Refresh data after upgrade
  } catch (err) {
    console.error("Upgrade failed:", err);
    toast.error(err?.response?.data?.message || "Upgrade failed. Try again.");
  }
}
