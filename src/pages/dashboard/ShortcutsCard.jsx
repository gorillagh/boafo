"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Keyboard } from "lucide-react";

export default function ShortcutsCard() {
  const shortcuts = [
    { key: "Ctrl+Shift+S", label: "Read selected text" },
    { key: "Ctrl+Shift+L", label: "Summarize page" },
    { key: "Ctrl+Shift+U", label: "Start speech-to-text" },
  ];

  return (
    <Card className="glass-card p-6 shadow-xl">
      <CardHeader className="flex flex-col items-center text-center space-y-2">
        <div className="rounded-full p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300">
          <Keyboard className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold">Quick Shortcuts</h3>
        <p className="text-sm text-muted-foreground">
          Use keyboard shortcuts to boost productivity.
        </p>
      </CardHeader>

      <CardContent className="mt-4 space-y-3">
        {shortcuts.map((s, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
          >
            <span className="text-sm">{s.label}</span>
            <Badge
              className="text-xs cursor-default hover:bg-green-500/10 font-mono bg-background border text-muted-foreground"
            >
              {s.key}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
