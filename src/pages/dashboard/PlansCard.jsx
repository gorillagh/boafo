"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { useDashboard } from "@/context/dashboard/UseDashboard";

export default function PlansCard() {
  const { upgradePlan } = useDashboard();
  const features = [
    "Unlimited TTS & summaries",
    "Premium voices",
    "Custom reading speed",
  ];

  return (
    <Card className="glass-card p-6 flex flex-col justify-between shadow-xl">
      <CardHeader className="text-center space-y-2">
        <div className="flex justify-center">
          <Badge
            variant="outline"
            className="text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-300 rounded-full px-3 py-1 text-xs font-semibold"
          >
            PRO
          </Badge>
        </div>
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          Upgrade to Pro
        </h3>
        <p className="text-sm text-muted-foreground">Unlock full features</p>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3 mb-6">
          {features.map((f, i) => (
            <li key={i} className="flex items-center text-sm text-foreground">
              <Check className="w-4 h-4 text-green-500 mr-2" /> {f}
            </li>
          ))}
        </ul>

        <Button
          onClick={upgradePlan}
          disabled
          className="w-full bg-primaryGreen-light hover:bg-primaryGreen-dark text-white"
        >
          <Zap className="w-4 h-4 mr-2" />
          Upgrade Now
        </Button>
      </CardContent>
    </Card>
  );
}
