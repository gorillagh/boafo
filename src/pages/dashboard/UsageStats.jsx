"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { TrendingUp, FileText, Headphones } from "lucide-react";

const stats = [
  {
    name: "Productivity Boost",
    value: "+18%",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    name: "Articles Summarized",
    value: "24",
    icon: FileText,
    color: "text-blue-500",
  },
  {
    name: "Minutes Listened",
    value: "312",
    icon: Headphones,
    color: "text-purple-500",
  },
];

export default function UsageStats() {
  return (
    <Card className="glass-card">
      <CardHeader
        title="This Week's Stats"
        description="Your activity over the last 7 days."
      />
      <CardContent>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          role="list"
          aria-label="Usage statistics"
        >
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                role="listitem"
                className="p-4 rounded-xl bg-muted/40 dark:bg-muted/20 flex items-center shadow-sm"
              >
                <div
                  className={`mr-4 p-3 rounded-full bg-muted shadow-inner ${item.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-montserrat">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
