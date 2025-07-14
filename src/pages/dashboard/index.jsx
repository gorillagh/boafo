import React, { useState } from "react";
import { motion } from "framer-motion";
import QuickActions from "./QuickActions";
import ExtensionStatus from "./ExtensionStatus";
import ShortcutsCard from "./ShortcutsCard";
import Plans from "./Plan";
import GettingStarted from "./GettingStarted";

export default function DashboardPage() {
  const [currentPlan, setCurrentPlan] = useState("free");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200">
            Welcome to Boafo! 🚀
          </h1>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
            Your AI-powered web assistant for reading, summarizing, and
            transcribing content.
          </p>
        </div>
      </div>

      <QuickActions />

      <div className="grid md:grid-cols-2 gap-6">
        <ExtensionStatus />
        <ShortcutsCard />
      </div>

      <Plans currentPlan={currentPlan} onChange={setCurrentPlan} />

      <GettingStarted />
    </motion.div>
  );
}
