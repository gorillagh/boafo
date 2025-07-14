"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { Menu, Moon, Sun } from "lucide-react";
import UserNav from "./UseNav";

export default function DashboardHeader({ toggleMobileSidebar }) {
  const { theme, toggleTheme } = useTheme();  // ← use toggleTheme, not setTheme

  return (
    <header className="h-16 flex items-center justify-between px-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
      <Button
        onClick={toggleMobileSidebar}
        className="md:hidden p-2 -ml-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
      >
        <Menu />
      </Button>
      <div className="hidden md:flex flex-1">
        <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
          Dashboard
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <Button
          onClick={toggleTheme}                  // ← call toggleTheme
          className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
        <UserNav />
      </div>
    </header>
  );
}
