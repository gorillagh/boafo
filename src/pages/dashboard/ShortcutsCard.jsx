import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Keyboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const shortcuts = [
  { key: "Ctrl+Shift+S", action: "Read selected text aloud" },
  { key: "Ctrl+Shift+L", action: "Summarize current page" },
  { key: "Ctrl+Shift+U", action: "Start speech-to-text" },
];

export default function ShortcutsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Keyboard className="mr-2 text-purple-500" /> Quick Shortcuts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {shortcuts.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg"
            >
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {s.action}
              </span>
              <Badge variant="outline" className="font-mono text-xs">
                {s.key}
              </Badge>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          View All Shortcuts
        </Button>
      </CardContent>
    </Card>
  );
}
