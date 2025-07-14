import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "1",
    title: "Install Extension",
    desc: "Add Boafo to your Chrome browser",
    action: "Install Now",
  },
  {
    step: "2",
    title: "Learn Shortcuts",
    desc: "Master the keyboard shortcuts",
    action: "View Guide",
  },
  {
    step: "3",
    title: "Start Using",
    desc: "Begin reading and summarizing",
    action: "Watch Tutorial",
  },
];

export default function GettingStarted() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BookOpen className="mr-2 text-orange-500" /> Getting Started
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="mx-auto mb-3 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  {s.step}
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {s.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {s.desc}
                </p>
                <Button size="sm" variant="outline">
                  {s.action}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
