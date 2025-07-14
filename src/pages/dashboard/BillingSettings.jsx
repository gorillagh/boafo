"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDashboard } from "@/context/DashboardContext";
import { Calendar, Check, Download } from "lucide-react";
import React from "react";

function PlanOption({ type, currentPlan, onChange }) {
  const features = {
    free: [
      "10 TTS sessions/day",
      "5 summaries/day",
      "Basic voices",
      "Standard speed",
      "5 min transcription",
    ],
    pro: [
      "Unlimited TTS & summaries",
      "Premium voices",
      "Variable speeds",
      "Unlimited transcription",
      "Priority support",
    ],
  };

  return (
    <div
      className={`p-6 rounded-lg border-2 transition ${
        currentPlan === type
          ? "border-green-500 bg-green-50 dark:bg-green-900/20"
          : "border-slate-200 dark:border-slate-700"
      }`}
    >
      <div className="text-center mb-6 relative">
        <h3 className="text-xl font-bold capitalize">{type}</h3>
        <div className="text-3xl font-bold mt-2">
          {type === "free" ? "$0" : "$9.99"}
          <span className="text-lg font-normal text-slate-600 dark:text-gray-400">
            /month
          </span>
        </div>
      </div>
      <ul className="space-y-3 mb-6">
        {features[type].map((feat, i) => (
          <li key={i} className="flex items-center text-sm">
            <Check className="mr-2 h-4 w-4 text-green-500" />
            {feat}
          </li>
        ))}
      </ul>
      <Button
        className="w-full"
        onClick={() => onChange(type)}
        disabled={currentPlan === type}
        variant={currentPlan === type ? "outline" : "default"}
      >
        {currentPlan === type
          ? "Current Plan"
          : `Switch to ${type.charAt(0).toUpperCase() + type.slice(1)}`}
      </Button>
    </div>
  );
}

export default function BillingSettings() {
  const { plan, setPlan } = useDashboard();

  const billingHistory = [
    {
      date: "Jan 15, 2024",
      amount: "$9.99",
      status: "Paid",
      invoice: "INV-001",
    },
    {
      date: "Dec 15, 2023",
      amount: "$9.99",
      status: "Paid",
      invoice: "INV-002",
    },
    {
      date: "Nov 15, 2023",
      amount: "$9.99",
      status: "Paid",
      invoice: "INV-003",
    },
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Manage Subscription</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <PlanOption type="free" currentPlan={plan} onChange={setPlan} />
          <PlanOption type="pro" currentPlan={plan} onChange={setPlan} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {billingHistory.map((b, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border dark:border-slate-700 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Calendar className="text-green-600 h-5 w-5" />
                  <div>
                    <p className="font-medium">{b.date}</p>
                    <p className="text-sm text-slate-500">
                      Invoice {b.invoice}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-medium">{b.amount}</p>
                  <Badge variant="success">{b.status}</Badge>
                  <Button variant="ghost" size="icon">
                    <Download className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
