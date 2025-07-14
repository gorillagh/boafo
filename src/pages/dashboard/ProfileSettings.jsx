"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDashboard } from "@/context/DashboardContext";
import { Save, Trash2 } from "lucide-react";
import React from "react";
import { FaUpload } from "react-icons/fa";

export default function ProfileSettings() {
  const { user } = useDashboard();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Public Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <img
            className="h-20 w-20 rounded-full"
            src={user.avatarUrl}
            alt={user.name}
          />
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <FaUpload className="mr-2 h-4 w-4" /> Upload
            </Button>
            <Button
              variant="ghost"
              className="text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue={user.name} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={user.email} />
          </div>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </CardContent>
    </Card>
  );
}
