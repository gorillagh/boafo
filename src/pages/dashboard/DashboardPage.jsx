"use client";

import React from "react";
import QuickActions from "./QuickActions";
import ExtensionStatus from "./ExtensionStatus";
import ShortcutsCard from "./ShortcutsCard";
import PlansCard from "./PlansCard";
import GettingStarted from "./GettingStarted";
import { useDashboard } from "@/context/DashboardContext";

export default function DashboardPage() {
  const { plan } = useDashboard();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">
          Welcome to Boafo! 🚀
        </h1>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
          Your AI-powered web assistant at your service.
        </p>
      </div>
      <QuickActions />
      <div className="grid md:grid-cols-2 gap-6">
        <ExtensionStatus />
        <ShortcutsCard />
      </div>
      {plan === "free" && <PlansCard />}
      <GettingStarted />
    </div>
  );
}
