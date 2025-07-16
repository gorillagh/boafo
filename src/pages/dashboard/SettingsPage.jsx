"use client";
import React, { useState, useEffect } from "react";
import ProfileSettings from "./ProfileSettings";
import BillingSettings from "./BillingSettings";
import { motion, AnimatePresence } from "framer-motion";
import { User, CreditCard, Bell, Shield } from "lucide-react";

const TABS = [
  {
    id: "profile",
    label: "Profile",
    icon: User,
    component: <ProfileSettings />,
  },
  {
    id: "billing",
    label: "Billing",
    icon: CreditCard,
    component: <BillingSettings />,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
    component: (
      <div className="glass-card p-8 text-center h-full flex flex-col justify-center">
        <Bell className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-medium">Notification Settings</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          This feature is coming soon!
        </p>
      </div>
    ),
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    component: (
      <div className="glass-card p-8 text-center h-full flex flex-col justify-center">
        <Shield className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-medium">Security Settings</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          This feature is coming soon!
        </p>
      </div>
    ),
  },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  // Sync with URL hash
  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (TABS.some((tab) => tab.id === hash)) {
        setActiveTab(hash);
      }
    };
    updateFromHash();
    window.addEventListener("popstate", updateFromHash);
    return () => window.removeEventListener("popstate", updateFromHash);
  }, []);

  const changeTab = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState(null, "", `#${tabId}`);
  };

  const activeComponent = TABS.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold font-montserrat">Settings</h1>
        <p className="mt-2 text-muted-foreground">
          Manage your account, subscription, and preferences.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Tabs */}
        <nav className="md:col-span-1" role="tablist">
          <ul className="space-y-2">
            {TABS.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  role="tab"
                  aria-selected={activeTab === id}
                  onClick={() => changeTab(id)}
                  className={`relative w-full flex items-center p-3 rounded-lg font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 ${
                    activeTab === id
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : ""
                  }`}
                >
                  {activeTab === id && (
                    <motion.div
                      layoutId="active-settings-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primaryGreen-light rounded-r-full"
                    />
                  )}
                  <Icon className="w-5 h-5 mr-3 ml-2" />
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tab Content */}
        <div className="md:col-span-3 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {activeComponent}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
