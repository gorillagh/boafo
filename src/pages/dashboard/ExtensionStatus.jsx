"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import React from "react";
import { FaChrome } from "react-icons/fa";

export default function ExtensionStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FaChrome className="mr-2 text-blue-500" />
          Extension Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center space-x-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <div>
              <p className="font-medium text-green-800 dark:text-green-200">
                Extension Active
              </p>
              <p className="text-sm text-green-600 dark:text-green-400">
                All features enabled
              </p>
            </div>
          </div>
          <Badge variant="success">v2.1.0</Badge>
        </div>
        <Button variant="outline" className="w-full">
          <Download className="mr-2 h-4 w-4" /> Check for Update
        </Button>
      </CardContent>
    </Card>
  );
}
