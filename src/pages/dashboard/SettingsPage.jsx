"use client";

import React, { useState } from "react";
import ProfileSettings from "./ProfileSettings";
import BillingSettings from "./BillingSettings";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const tabs = ["profile", "billing", "notifications", "security"];

  const TabButton = ({ id, children }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        activeTab === id
          ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
          Settings
        </h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Manage your account, subscription, and preferences.
        </p>
      </div>
      <div className="flex items-center space-x-2 border-b border-slate-200 dark:border-slate-700 pb-2">
        {tabs.map((tab) => (
          <TabButton key={tab} id={tab}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </TabButton>
        ))}
      </div>
      <div className="mt-6">
        {activeTab === "profile" && <ProfileSettings />}
        {activeTab === "billing" && <BillingSettings />}
        {activeTab === "notifications" && (
          <p>Notification settings will be here.</p>
        )}
        {activeTab === "security" && <p>Security settings will be here.</p>}
      </div>
    </div>
  );
}
