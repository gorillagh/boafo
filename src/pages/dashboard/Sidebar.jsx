// src/pages/dashboard/Sidebar.jsx
"use client";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Settings, X, Zap, LogOut, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDashboard } from "@/context/DashboardContext";
import { Tooltip } from "react-tooltip";

export default function Sidebar({ isOpen, setIsOpen }) {
  const { plan, logout } = useDashboard();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = useMemo(
    () => [
      { title: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
      { title: "Settings", to: "/dashboard/settings", icon: Settings },
      ...(plan === "free"
        ? [{ title: "Upgrade", to: "/dashboard/settings#billing", icon: Zap }]
        : []),
    ],
    [plan]
  );

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 + 0.2, duration: 0.3 },
    }),
  };

  const shouldShowSidebar = !isMobile || isOpen;

  return (
    <>
      {/* 👇 ONLY THIS LINE IS CHANGED */}
      <Tooltip
        id="sidebar-tooltip"
        place="right"
        className="z-40"
        offset={18}
        style={{ padding: "3px 8px", fontSize: "10px" }}
      />

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {shouldShowSidebar && (
          <motion.aside
            key="sidebar"
            initial={{ x: isMobile ? "-100%" : 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed md:relative inset-y-0 left-0 ${
              collapsed ? "w-20" : "w-64"
            } bg-sidebar/80 dark:bg-sidebar/80 backdrop-blur-lg border-r border-sidebar-border z-50 flex flex-col transition-all duration-300`}
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between h-20 border-b border-sidebar-border">
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className={`text-3xl flex justify-center items-center gap-3 font-bold font-montserrat bg-gradient-to-r from-primaryGreen-light to-primaryGreen-dark bg-clip-text text-transparent ${
                    collapsed ? "hidden" : ""
                  }`}
                >
                  <div>
                    <img
                      className="h-10 rounded-lg w-10"
                      src="/logo-green.png"
                      alt="logo"
                    />
                  </div>
                  Boafo
                </motion.span>
              </Link>

              <div className="flex gap-2 items-center">
                {/* Collapse toggle */}
                <button
                  data-tooltip-content="Toggle Sidebar"
                  onClick={() => setCollapsed((prev) => !prev)}
                  className="hidden md:block p-2 rounded-lg hover:bg-sidebar-accent"
                  aria-label="Toggle collapse"
                >
                  <Menu className="w-5 h-5" />
                </button>

                {/* Close button (mobile) */}
                {isMobile && (
                  <button
                    onClick={() => setIsOpen(false)}
                    className="md:hidden p-2 rounded-lg hover:bg-sidebar-accent"
                    aria-label="Close sidebar"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              {navItems.map((item, i) => {
                const isActive =
                  location.pathname + (location.hash || "") === item.to;
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.to}
                    custom={i}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      data-tooltip-id="sidebar-tooltip"
                      data-tooltip-content={collapsed ? item.title : ""}
                      to={item.to}
                      onClick={() => isMobile && setIsOpen(false)}
                      className={`relative flex items-center gap-4 p-3 rounded-lg font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 ${
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : ""
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-nav-indicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-primaryGreen-light rounded-r-full"
                        />
                      )}
                      <Icon className="h-5 w-5 flex-shrink-0 ml-1" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-sidebar-border">
              <motion.button
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={collapsed ? "Sign Out" : ""}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={logout}
                className="flex items-center w-full p-3 text-red-500 hover:bg-red-500/10 rounded-lg font-medium transition-colors duration-200"
              >
                <LogOut className="mr-4 h-5 w-5" />
                {!collapsed && <span>Sign Out</span>}
              </motion.button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
