import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Chrome, Download } from "lucide-react";

export default function ExtensionStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Chrome className="mr-2 text-blue-500" /> Extension Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center space-x-3">
              <span className="block w-3 h-3 bg-green-500 rounded-full"></span>
              <div>
                <p className="font-medium text-green-800 dark:text-green-200">
                  Extension Active
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  All features enabled
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className="border-green-300 text-green-700"
            >
              v2.1.0
            </Badge>
          </div>
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center">
            <Download className="mr-2" /> Update Extension
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
