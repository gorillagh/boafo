"use client";

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDashboard } from "@/context/DashboardContext";

export default function UserNav() {
  const { user, logout } = useDashboard();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getInitials = (name) =>
    name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : "";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  const getAvatarUrl = () => {
    const baseUrl =
      "https://boafo-accessibility-services-production-b6b5.up.railway.app";
    if (!user.avatarUrl) {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(
        user.name
      )}&background=34C759&color=fff`;
    }
    return user.avatarUrl.startsWith("http")
      ? `${user.avatarUrl}?t=${Date.now()}`
      : `${baseUrl}${user.avatarUrl}?t=${Date.now()}`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-800 focus:ring-green-500"
      >
        {user.avatarUrl ? (
          <img
            className="h-9 w-9 rounded-full object-cover"
            src={getAvatarUrl()}
            alt={user.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                user.name
              )}&background=34C759&color=fff`;
            }}
          />
        ) : (
          <div className="h-9 w-9 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
            {getInitials(user.name)}
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50">
          <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
            <p className="text-sm font-medium text-slate-900 dark:text-slate-200 truncate">
              {user.name}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
              {user.email}
            </p>
          </div>
          <Link
            to="/dashboard/settings"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            Settings
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            Dashboard
          </Link>
          <div className="border-t border-slate-200 dark:border-slate-700 my-1" />
          <button
            onClick={() => {
              setIsOpen(false);
              logout();
            }}
            className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
