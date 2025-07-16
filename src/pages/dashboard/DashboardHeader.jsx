"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Menu, Moon, Sun } from "lucide-react";
import UserNav from "./UseNav";

export default function DashboardHeader({ toggleMobileSidebar }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="h-20 flex items-center justify-between px-6 bg-background/60 dark:bg-background/60 backdrop-blur-md border-b border-border/50 sticky top-0 z-30"
    >
      <button
        onClick={toggleMobileSidebar}
        className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Kept hidden on mobile for cleaner look, shown on desktop */}
      <div className="hidden md:block" />

      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-3 rounded-full bg-gradient-to-br from-primaryGreen-light to-primaryGreen-dark text-white shadow-md hover:shadow-lg transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 30 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
        <UserNav />
      </div>
    </motion.header>
  );
}
