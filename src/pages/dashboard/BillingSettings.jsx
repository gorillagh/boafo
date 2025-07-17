"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { useDashboard } from "@/context/DashboardContext";
import { BadgeCheck, Rocket, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = {
  free: {
    title: "Free Plan",
    price: "$0/month",
    icon: BadgeCheck,
    features: [
      "Text to Speech",
      "Summarize Articles",
      "Basic Accessibility Tools",
      "Limited Usage",
      "No Offline Support",
    ],
    unavailable: [3, 4], // Indexes of features to show as unavailable
  },
  pro: {
    title: "Pro Plan",
    price: "$9.99/month",
    icon: Rocket,
    features: [
      "Text to Speech",
      "Summarize Articles",
      "Unlimited Usage",
      "Offline Accessibility",
      "Priority Support",
    ],
    unavailable: [], // all features available
  },
};

function PlanCard({ type, current, onSelect }) {
  const { title, price, icon: Icon, features, unavailable } = plans[type];
  const isCurrent = current === type;

  return (
    <div className="glass-card p-8 text-center h-full flex flex-col justify-center items-center space-y-4 border border-border shadow-md">
      <Icon className="h-10 w-10 text-primaryGreen-light" />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{price}</p>

      <ul className="text-sm mt-4 space-y-2 text-left">
        {features.map((feature, i) => (
          <li
            key={i}
            className={`flex items-center gap-2 ${
              unavailable.includes(i) ? "text-red-500 line-through" : "text-foreground"
            }`}
          >
            {unavailable.includes(i) ? <Ban className="w-4 h-4" /> : <BadgeCheck className="w-4 h-4 text-green-500" />}
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className="mt-6 w-full max-w-[200px]"
        // disabled={isCurrent}
        disabled
        onClick={() => onSelect(type)}
        
      >
        {isCurrent ? "Current Plan" : `Switch to ${title}`}
      </Button>
    </div>
  );
}

export default function BillingSettings() {
  const { plan, upgradePlan } = useDashboard();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold font-montserrat">Billing</h1>
        <p className="mt-2 text-muted-foreground">Compare plans and switch anytime.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <PlanCard type="free" current={plan} onSelect={upgradePlan} />
        <PlanCard type="pro" current={plan} onSelect={upgradePlan} />
      </div>
    </div>
  );
}
