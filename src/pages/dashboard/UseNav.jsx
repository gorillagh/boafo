"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDashboard } from "@/context/DashboardContext";
import { useAvatar } from "@/lib/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function UserNav() {
  const { user, logout } = useDashboard();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const buttonRef = useRef(null);
  const src = useAvatar(user);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  if (!user) return null;

  return (
    <div className="relative" ref={ref}>
      <motion.button
        ref={buttonRef}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="User menu"
        className="rounded-full ring-2 ring-offset-2 ring-offset-background ring-primaryGreen-light/50 hover:ring-primaryGreen-light transition-all duration-300"
      >
        <img
          src={src}
          onError={(e) =>
            (e.currentTarget.src = `https://api.dicebear.com/8.x/initials/svg?seed=${user.name}`)
          }
          alt={user.name || "User avatar"}
          className="h-14 w-14 rounded-full object-cover"
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-3 w-56 border-none glass-card p-2 z-50 origin-top-right shadow-xl border border-border"
            role="menu"
            aria-label="User menu dropdown"
          >
            <div className="px-2 py-2 border-b border-border">
              <p className="font-semibold text-sm text-foreground truncate">
                {user.name}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {user.email}
              </p>
            </div>
            <div className="py-1 space-y-1">
              <Link
                to="/dashboard/settings"
                onClick={() => setOpen(false)}
                className="block w-full text-left px-2 py-2 text-sm rounded-md text-foreground hover:bg-accent"
                role="menuitem"
              >
                Settings
              </Link>
              <Button
                variant="ghost"
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="w-full justify-start px-2 py-2 text-sm text-red-500 hover:text-red-500 hover:bg-red-500/10"
                role="menuitem"
              >
                Sign Out
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
