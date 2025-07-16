"use client";
import React from "react";
import { Navigate } from "react-router-dom";
import { useDashboard } from "@/context/DashboardContext";
import DashboardSkeleton from "./DashboardSkeleton";
import QuickActions from "./QuickActions";
import ExtensionStatus from "./ExtensionStatus";
import ShortcutsCard from "./ShortcutsCard";
import PlansCard from "./PlansCard";
import UsageStats from "./UsageStats";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardPage() {
  const { user, plan, loading } = useDashboard();

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const firstName = user.name?.split(" ")[0] || "there";

  // Parent container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  // Each section/card animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="dashboard-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Page Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl font-bold font-montserrat tracking-tight">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-dark bg-clip-text text-transparent">
              {firstName}
            </span>
            !
          </h1>
          <p className="mt-2 text-muted-foreground">
            Here's your productivity snapshot for today.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div variants={itemVariants}>
              <UsageStats />
            </motion.div>
            <motion.div variants={itemVariants}>
              <QuickActions />
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div variants={itemVariants}>
              <ExtensionStatus />
            </motion.div>
            {plan === "free" && (
              <motion.div variants={itemVariants}>
                <PlansCard />
              </motion.div>
            )}
            <motion.div variants={itemVariants}>
              <ShortcutsCard />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
