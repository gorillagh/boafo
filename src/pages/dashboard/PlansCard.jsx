"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import React from "react";

export default function PlansCard() {
  const features = [
    "Unlimited TTS & summaries",
    "Premium, natural voices",
    "Variable playback speeds",
    "Unlimited transcription",
    "Priority email support",
  ];

  return (
    <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 border-green-200 dark:border-green-800">
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <Badge variant="success" className="mb-2">
              Go Pro
            </Badge>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              Unlock Premium Features
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mt-2 mb-4">
              Upgrade to Boafo Pro to get unlimited access to all features and
              priority support.
            </p>
            <ul className="space-y-2 mb-6">
              {features.slice(0, 3).map((feat, i) => (
                <li key={i} className="flex items-center text-sm">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center shadow-lg">
            <h4 className="font-bold text-xl">Pro Plan</h4>
            <div className="text-4xl font-bold my-2">
              $9.99
              <span className="text-lg font-normal text-slate-500">/mo</span>
            </div>
            <Button className="w-full mt-4">
              <ArrowRight className="mr-2 h-4 w-4" /> Upgrade Now
            </Button>
            <a
              href="#plans"
              className="text-sm text-slate-500 hover:underline mt-2 inline-block"
            >
              Compare plans
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
