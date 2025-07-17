"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaChrome, FaKeyboard, FaBookOpen } from "react-icons/fa";
import { Zap } from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Install Extension",
      icon: <FaChrome className="w-5 h-5" />,
      onClick: () =>
        window.open(
          "https://chromewebstore.google.com/detail/bfpoecmheiafbmghdbajladmhdjgobkg?utm_source=item-share-cb"
        ),
    },
    {
      title: "Watch Tutorials",
      icon: <FaBookOpen className="w-5 h-5" />,
      onClick: () => {},
    },
  ];

  return (
    <div className="flex lg:flex-col gap-5">
      {actions.map((action, i) => (
        <Card
          key={i}
          className="group glass-card w-44 shadow-xl p-6 flex flex-col items-center justify-center transition-all duration-200 hover:shadow-xl rounded-2xl"
        >
          <div className="bg-primaryGreen-light/90 dark:bg-primaryGreen-dark/80 text-white rounded-full p-3 mb-4 shadow-md group-hover:scale-110 transition-transform">
            {action.icon}
          </div>
          <h3 className="font-semibold text-center text-base mb-3 text-foreground">
            {action.title}
          </h3>
          <Button
          
            size="sm"
            className="w-full rounded-l-full rounded-r-full hover:bg-green-500 hover:text-white"
            onClick={action.onClick}
          >
            Go
          </Button>
        </Card>
      ))}
    </div>
  );
}
