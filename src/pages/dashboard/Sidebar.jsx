"use client";

import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, LogOut, Settings, X } from "lucide-react";
import React, { useEffect } from "react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const navItems = [
    { title: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
    { title: "Settings", to: "/dashboard/settings", icon: Settings },
  ];

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:w-64 md:flex md:flex-col`}
        // Added md:flex md:flex-col to ensure it takes up space and organizes content on desktop
        style={{ width: "16rem" }} // Explicitly set width for consistency
      >
        <div className="p-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 h-16">
          <span className="text-2xl font-bold text-green-500">Boafo</span>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
            aria-label="Close sidebar"
          >
            <X />
          </button>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {/* Added overflow-y-auto for scrollable navigation if many items */}
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center p-3 rounded-lg text-sm font-medium transition-colors text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 ${
                location.pathname === item.to
                  ? "bg-slate-100 dark:bg-slate-800"
                  : ""
              }`}
              onClick={() => setIsOpen(false)} // Close sidebar when an item is clicked on mobile
            >
              <item.icon className="mr-3 h-5 w-5" />{" "}
              {/* Added h-5 w-5 for consistent icon sizing */}
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={() => {
              alert("Signing out!");
              
              // In a real app, you'd handle actual sign-out logic here (e.g., clearing tokens, redirecting)
            }}
            className="w-full flex items-center p-3 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />{" "}
            {/* Added h-5 w-5 for consistent icon sizing */}
            <span className="ml-3">Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}