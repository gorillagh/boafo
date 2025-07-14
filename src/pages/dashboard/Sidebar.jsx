import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CreditCard,
  Settings as SettingsIcon,
  LogOut,
} from "lucide-react";

// "Profile" has been removed from the nav items
const navItems = [
  { title: "Dashboard", to: "/dashboard", icon: LayoutDashboard, end: true },
  { title: "Billing", to: "/dashboard/billing", icon: CreditCard },
  { title: "Settings", to: "/dashboard/settings", icon: SettingsIcon },
];

export default function Sidebar({ onNavigate }) {
  return (
    <aside className="w-64 flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-full">
      <div className="p-6 flex items-center space-x-2 border-b dark:border-gray-700">
        <span className="text-2xl font-bold text-green-500">Boafo</span>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end} // Use end prop for exact matching on the dashboard index route
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-200"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`
            }
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.title}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t dark:border-gray-700">
        <button
          onClick={() => (window.location.href = "/login")}
          className="w-full flex items-center p-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
