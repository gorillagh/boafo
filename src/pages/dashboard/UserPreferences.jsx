"use client";
import React from "react";
import { Label } from "@/components/ui/label";

export default function UserPreferences({ user }) {
  if (!user) return null;

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <h3 className="text-xl font-semibold font-montserrat text-center mt-6">
        Your Preferences
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Goals */}
        <div>
          <Label className="text-muted-foreground">Goals</Label>
          <div className="bg-muted rounded-lg p-3 text-sm space-y-1 border">
            {user.goals?.length ? (
              user.goals.map((goal, i) => (
                <div key={i} className="capitalize">
                  • {goal.replace(/_/g, " ")}
                </div>
              ))
            ) : (
              <div className="italic text-muted-foreground">No goals set</div>
            )}
          </div>
        </div>

        {/* Content Preferences */}
        <div>
          <Label className="text-muted-foreground">Content Preferences</Label>
          <div className="bg-muted rounded-lg p-3 text-sm space-y-1 border">
            {user.contentTypes?.length ? (
              user.contentTypes.map((type, i) => (
                <div key={i} className="capitalize">
                  • {type.replace(/_/g, " ")}
                </div>
              ))
            ) : (
              <div className="italic text-muted-foreground">
                No preferences set
              </div>
            )}
          </div>
        </div>

        {/* Preferred Voice */}
        <div>
          <Label className="text-muted-foreground">Preferred Voice</Label>
          <div className="bg-muted rounded-lg p-3 text-sm border capitalize">
            {user.selectedVoice || (
              <span className="italic text-muted-foreground">Not set</span>
            )}
          </div>
        </div>

        {/* Reading Speed */}
        <div>
          <Label className="text-muted-foreground">Reading Speed</Label>
          <div className="bg-muted rounded-lg p-3 text-sm border">
            {user.readingSpeed ? (
              `${user.readingSpeed}x`
            ) : (
              <span className="italic text-muted-foreground">Default (1x)</span>
            )}
          </div>
        </div>

        {/* Local Language */}
        <div>
          <Label className="text-muted-foreground">
            Local Language Interest
          </Label>
          <div className="bg-muted rounded-lg p-3 text-sm border">
            {user.localLanguageInterest ? "Yes" : "No"}
          </div>
        </div>

        {/* Current Plan */}
        <div>
          <Label className="text-muted-foreground">Plan</Label>
          <div className="bg-muted rounded-lg p-3 text-sm border capitalize">
            {user.plan}
          </div>
        </div>
      </div>
    </div>
  );
}
