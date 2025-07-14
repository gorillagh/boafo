import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download } from "lucide-react";

const billingHistory = [
  { date: "Jan 15, 2024", amount: "$9.99", status: "Paid", invoice: "INV-001" },
  { date: "Dec 15, 2023", amount: "$9.99", status: "Paid", invoice: "INV-002" },
  { date: "Nov 15, 2023", amount: "$9.99", status: "Paid", invoice: "INV-003" },
];

export default function BillingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
        Billing & Subscription
      </h1>
      <p className="text-slate-600 dark:text-slate-400">
        Manage your subscription and billing information
      </p>

      <Tabs defaultValue="subscription" className="space-y-6">
        <TabsList>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="plans">Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="subscription">
          <Card>
            <CardHeader>
              <CardTitle>Current Subscription</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for subscription details */}
              <div className="flex items-center justify-between">
                <p>Your current plan details here...</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
            </CardHeader>
            <CardContent>
              {billingHistory.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 border rounded-lg mb-2"
                >
                  <div className="flex items-center space-x-4">
                    <Calendar className="text-green-600" />
                    <div>
                      <p className="font-medium">{b.date}</p>
                      <p className="text-sm">Invoice {b.invoice}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-medium">{b.amount}</p>
                    <Badge variant="outline">{b.status}</Badge>
                    <Button variant="ghost" size="sm">
                      <Download />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plans">{/* Plan chooser UI... */}</TabsContent>
      </Tabs>
    </motion.div>
  );
}
