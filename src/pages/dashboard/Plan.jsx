import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function Plans({ currentPlan, onChange }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose Your Plan</CardTitle>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Unlock premium features with Boafo Pro
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {["free", "pro"].map((plan) => (
            <div
              key={plan}
              className={`p-6 rounded-lg border-2 transition ${
                currentPlan === plan
                  ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="text-center mb-6 relative">
                {plan === "pro" && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 capitalize">
                  {plan}
                </h3>
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mt-2">
                  {plan === "free" ? "$0" : "$9.99"}
                  <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
                    /month
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {features[plan].map((feat, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="mr-2 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  currentPlan === plan
                    ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
                    : plan === "pro"
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "outline"
                }`}
                onClick={() => onChange(plan)}
                disabled={currentPlan === plan}
              >
                {currentPlan === plan ? (
                  "Current Plan"
                ) : plan === "pro" ? (
                  <>
                    <ArrowRight className="mr-2" /> Upgrade to Pro
                  </>
                ) : (
                  "Select Free"
                )}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
