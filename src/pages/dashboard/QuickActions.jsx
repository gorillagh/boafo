import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Chrome, User, Keyboard, BookOpen } from "lucide-react";

const quickActions = [
  {
    title: "Install Extension",
    desc: "Add Boafo to Chrome",
    icon: <Chrome />,
    action: "Install Now",
    color: "bg-blue-500",
  },
  {
    title: "Profile Settings",
    desc: "Manage your account",
    icon: <User />,
    action: "Open Settings",
    color: "bg-green-500",
  },
  {
    title: "Learn Shortcuts",
    desc: "Master keyboard shortcuts",
    icon: <Keyboard />,
    action: "View Shortcuts",
    color: "bg-purple-500",
  },
  {
    title: "Watch Tutorials",
    desc: "Get started quickly",
    icon: <BookOpen />,
    action: "Start Learning",
    color: "bg-orange-500",
  },
];

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="mr-2" /> Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="hover:shadow-lg transition transform hover:scale-105">
                <CardContent className="text-center">
                  <div
                    className={`${q.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4`}
                  >
                    {q.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {q.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {q.desc}
                  </p>
                  <Button variant="outline" className="w-full">
                    {q.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
