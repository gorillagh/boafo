"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { FaMarkdown, FaMarker } from "react-icons/fa";
import { BadgeCheck } from "lucide-react";

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
          <ul className="glass-card rounded-xl p-3 mt-1 text-sm space-y-1">
            {user.goals?.length ? (
              user.goals.map((goal, i) => (
                <li key={i} className="capitalize flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-green-500" />
                  <span>{goal.replace(/_/g, " ")} </span>
                </li>
              ))
            ) : (
              <div className="italic text-muted-foreground">No goals set</div>
            )}
          </ul>
        </div>

        {/* Content Preferences */}
        <div>
          <Label className="text-muted-foreground">Content Preferences</Label>
          <ul className="glass-card rounded-xl p-3 mt-1 text-sm space-y-1">
            {user.contentTypes?.length ? (
              user.contentTypes.map((type, i) => (
                <li key={i} className="capitalize flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-green-500" />
                  <span> {type.replace(/_/g, " ")}</span>
                </li>
              ))
            ) : (
              <div className="italic text-muted-foreground">
                No preferences set
              </div>
            )}
          </ul>
        </div>

        {/* Preferred Voice */}
        <div>
          <Label className="text-muted-foreground">Preferred Voice</Label>
          <div className="glass-card rounded-xl p-3 mt-1 text-sm capitalize">
            {user.selectedVoice ? (
              <p className="capitalize flex items-center gap-2">
                {" "}
                <BadgeCheck className="w-4 h-4 text-green-500" />
                <span>{user.selectedVoice}</span>
              </p>
            ) : (
              <div className="italic text-muted-foreground">Not set</div>
            )}
          </div>
        </div>

        {/* Reading Speed */}
        <div>
          <Label className="text-muted-foreground">Reading Speed</Label>

          <div className="glass-card rounded-xl mt-1 p-3 text-sm">
            {user.readingSpeed ? (
              <p className="capitalize flex items-center gap-2">
                {" "}
                <BadgeCheck className="w-4 h-4 text-green-500" />
                <span>{`${user.readingSpeed}x`}</span>
              </p>
            ) : (
              <div className="italic text-muted-foreground">Default (1x)</div>
            )}
          </div>
        </div>

        {/* Local Language */}
        <div>
          <Label className="text-muted-foreground">
            Local Language Interest
          </Label>
          <div className="glass-card rounded-xl p-3 mt-1 text-sm flex items-center gap-2">
            <BadgeCheck className="w-4 h-4 text-green-500" />
            <span>{user.localLanguageInterest ? "Yes" : "No"}</span>
          </div>
        </div>

        {/* Current Plan */}
        <div>
          <Label className="text-muted-foreground">Plan</Label>
          <div className="glass-card rounded-xl p-3 mt-1 text-sm flex items-center gap-2 capitalize">
            <BadgeCheck className="w-4 h-4 text-green-500" />{" "}
            <span>{user.plan}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
