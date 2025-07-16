"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaChrome, FaKeyboard, FaBookOpen } from "react-icons/fa";
import { Zap } from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Install Extension",
      icon: <FaChrome />,
      onClick: () => window.open("https://chromewebstore.google.com/..."),
    },
    {
      title: "View Shortcuts",
      icon: <FaKeyboard />,
      onClick: () => {},
    },
    {
      title: "Watch Tutorials",
      icon: <FaBookOpen />,
      onClick: () => {},
    },
    {
      title: "Upgrade Plan",
      icon: <Zap />,
      onClick: () => {},
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((a, i) => (
        <Card key={i} className="hover:shadow-lg">
          <CardContent className="flex flex-col items-center">
            <div className="text-white bg-green-500 rounded-full p-3 mb-2">
              {a.icon}
            </div>
            <h3 className="font-semibold mb-2">{a.title}</h3>
            <Button variant="outline" onClick={a.onClick} size="sm">
              Go
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
