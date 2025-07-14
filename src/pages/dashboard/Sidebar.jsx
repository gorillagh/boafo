"use client";

import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, LogOut, Settings, X } from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const navItems = [
    { title: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
    { title: "Settings", to: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside
      className={`absolute md:relative z-50 md:z-auto flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 w-64`}
    >
      <div className="p-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 h-16">
        <span className="text-2xl font-bold text-green-500">Boafo</span>
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          <X />
        </button>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center p-3 rounded-lg text-sm font-medium transition-colors text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 ${
              location.pathname === item.to
                ? "bg-slate-100 dark:bg-slate-800"
                : ""
            }`}
          >
            <item.icon className="mr-3" />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={() => alert("Signing out!")}
          className="w-full flex items-center p-3 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors"
        >
          <LogOut />
          <span className="ml-3">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
