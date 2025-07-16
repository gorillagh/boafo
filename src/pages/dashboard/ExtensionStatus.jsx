"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExtensionStatus() {
  return (
    <Card className="glass-card h-full">
      <CardHeader
        title="Extension Status"
        icon={<CheckCircle className="text-primaryGreen-light" />}
      />
      <CardContent className="flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex items-center justify-between bg-primaryGreen-light/20 dark:bg-primaryGreen-dark/20 p-4 rounded-lg">
            <div className="flex items-center">
              <span className="relative flex h-3 w-3 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primaryGreen-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primaryGreen-dark"></span>
              </span>
              <div>
                <p className="font-semibold text-primaryGreen-dark dark:text-primaryGreen-light">
                  Active & Up to Date
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  All features enabled
                </p>
              </div>
            </div>
            <Badge variant="secondary">v2.1.0</Badge>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-4">
          <Download className="mr-2 h-4 w-4" /> Check for Update
        </Button>
      </CardContent>
    </Card>
  );
}
