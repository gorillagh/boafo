"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Keyboard } from "lucide-react";

export default function ShortcutsCard() {
  const shortcuts = [
    { key: "Ctrl+Shift+S", action: "Read selected text" },
    { key: "Ctrl+Shift+L", action: "Summarize page" },
    { key: "Ctrl+Shift+U", action: "Start speech-to-text" },
  ];

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
              className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg"
            >
              <span className="text-sm text-slate-700 dark:text-slate-300">
                {s.action}
              </span>
              <Badge variant="default" className="font-mono text-xs">
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
