// src/layouts/DashboardLayout.jsx
"use client";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DashboardHeader from "@/pages/dashboard/DashboardHeader";
import Sidebar from "@/pages/dashboard/Sidebar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Reset sidebarOpen when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false); // Sidebar is visible by default in desktop
      }
    };
    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen flex text-textColor-light dark:text-textColor-dark overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-secondaryGreen-light dark:from-gray-900 dark:to-secondaryGreen-dark" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-primaryGreen-light/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-primaryGreen-dark/40 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col z-10">
        <DashboardHeader
          toggleMobileSidebar={() => setSidebarOpen((prev) => !prev)}
        />
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}
