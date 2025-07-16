"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";

export default function PlansCard() {
  const { upgradePlan } = useDashboard();
  const features = [
    "Unlimited TTS & summaries",
    "Premium voices",
    "Variable speeds",
  ];
  return (
    <Card className="bg-gradient-to-br from-green-50 to-blue-50">
      <CardHeader title="Go Pro" badge={<Badge variant="success">Pro</Badge>} />
      <CardContent>
        <ul className="space-y-2 mb-4">
          {features.map((f, i) => (
            <li key={i} className="flex items-center">
              <Check className="mr-2 text-green-500" /> {f}
            </li>
          ))}
        </ul>
        <Button onClick={upgradePlan} className="w-full">
          Upgrade Now
        </Button>
      </CardContent>
    </Card>
  );
}
