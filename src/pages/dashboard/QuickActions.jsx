"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Zap } from "lucide-react";
import React from "react";
import { FaChrome, FaKeyboard } from "react-icons/fa";

export default function QuickActions() {
  const actions = [
    {
      title: "Install Extension",
      icon: <FaChrome />,
      color: "bg-blue-500",
    },
    {
      title: "View Shortcuts",
      icon: <FaKeyboard />,
      color: "bg-purple-500",
    },
    {
      title: "Watch Tutorials",
      icon: <BookOpen />,
      color: "bg-orange-500",
    },
    { title: "Upgrade Plan", icon: <Zap />, color: "bg-green-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action, i) => (
        <Card
          key={i}
          className="hover:shadow-lg transition-shadow hover:-translate-y-1 duration-200"
        >
          <CardContent className="flex flex-col items-center text-center pt-6">
            <div
              className={`text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 ${action.color}`}
            >
              {action.icon}
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-gray-200 mb-2">
              {action.title}
            </h3>
            <Button variant="outline" size="sm" className="mt-2 w-full">
              Go
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
