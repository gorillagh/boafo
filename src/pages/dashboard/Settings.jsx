import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Volume2, Save } from "lucide-react";

export default function SettingsPage() {
  const [speed, setSpeed] = useState([180]);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold">Settings</h1>
      <Tabs defaultValue="audio">
        <TabsList>
          <TabsTrigger value="audio">Audio</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="audio">
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center">
              <Volume2 className="mr-2" /> Audio Preferences
            </h3>
            {/* Additional audio settings can go here */}
          </div>
        </TabsContent>
        {/* Remaining tabs similar structure */}
      </Tabs>
    </motion.div>
  );
}
