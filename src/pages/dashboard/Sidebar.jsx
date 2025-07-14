// src/components/dashboard/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  Keyboard,
  BookOpen,
  CreditCard,
  Settings as SettingsIcon,
  LogOut,
} from "lucide-react";

const navItems = [
  { title: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { title: "Profile", to: "/dashboard/profile", icon: User },
  { title: "Shortcuts", to: "/dashboard/shortcuts", icon: Keyboard },
  { title: "Tutorials", to: "/dashboard/tutorials", icon: BookOpen },
  { title: "Billing", to: "/dashboard/billing", icon: CreditCard },
  { title: "Settings", to: "/dashboard/settings", icon: SettingsIcon },
];

export default function Sidebar({ onNavigate }) {
  return (
    <aside className="w-64 flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-full">
      <div className="p-6 flex items-center space-x-2">
        <span className="text-2xl font-bold text-primaryGreen-light dark:text-primaryGreen-dark">
          Boafo
        </span>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                isActive
                  ? "bg-primaryGreen-light bg-opacity-20 text-primaryGreen-light dark:text-primaryGreen-dark"
                  : "text-gray-700 dark:text-gray-300"
              }`
            }
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.title}
          </NavLink>
        ))}
      </nav>
      <button
        onClick={() => (window.location.href = "/login")}
        className="m-4 p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-700 rounded-md flex items-center justify-center"
      >
        <LogOut className="h-5 w-5 mr-1" />
        Sign Out
      </button>
    </aside>
  );
}
