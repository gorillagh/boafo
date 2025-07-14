"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { FaBookOpen } from "react-icons/fa";

export default function GettingStarted() {
  const steps = [
    { title: "Install Extension", desc: "Add Boafo to your browser" },
    { title: "Learn Shortcuts", desc: "Master the key commands" },
    { title: "Start Using", desc: "Read and summarize content" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FaBookOpen className="mr-2 text-orange-500" /> Getting Started
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50"
            >
              <div className="mx-auto mb-3 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <h4 className="font-semibold text-slate-800 dark:text-gray-200 mb-1">
                {s.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
