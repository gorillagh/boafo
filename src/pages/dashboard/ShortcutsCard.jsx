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
    <Card>
      <CardHeader title="Quick Shortcuts" icon={<Keyboard />} />
      <CardContent>
        {shortcuts.map((s, i) => (
          <div
            key={i}
            className="flex justify-between p-2 bg-gray-50 mb-2 rounded"
          >
            <span>{s.label}</span>
            <Badge className="font-mono">{s.key}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
