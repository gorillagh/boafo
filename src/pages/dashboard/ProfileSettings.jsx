"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Save, Trash2, Loader2 } from "lucide-react";
import { FaUpload } from "react-icons/fa";
import { toast } from "sonner";
import API from "@/lib/axios";
import UserPreferences from "./UserPreferences";
import { useDashboard } from "@/context/dashboard/UseDashboard";

export default function ProfileSettings() {
  const { user, fetchDashboardData } = useDashboard();
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [removed, setRemoved] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setPreview(user.avatarUrl || "");
      setRemoved(false);
    }
  }, [user]);

  const save = async () => {
    if (!name.trim()) return toast.error("Name is required");
    setLoading(true);

    const fd = new FormData();
    fd.append("name", name);
    if (file) fd.append("avatar", file);
    else if (removed) fd.append("removeAvatar", "true");

    try {
      const res = await API.put("/users/updateProfile", fd);
      toast.success(res.data.message);
      await fetchDashboardData();
    } catch {
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  const avatarSrc =
    preview || `https://api.dicebear.com/8.x/initials/svg?seed=${name}`;

  return (
    <div className="max-w-4xl mx-auto space-y-10 p-6 sm:p-10">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold font-montserrat">Public Profile</h2>
        <p className="text-muted-foreground mt-1">
          Manage your avatar, display name, and preferences.
        </p>
      </div>

      {/* Profile Card */}
      <Card className="shadow-md border border-green-400 dark:border-green-900 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Avatar & Display Name</CardTitle>
          <CardDescription>Update your public display details.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            {/* Avatar */}
            <div className="flex items-center gap-6">
              <img
                src={avatarSrc}
                alt="Avatar Preview"
                className="h-24 w-24 rounded-full object-cover shadow ring-4 ring-primaryGreen-light/30"
                onError={(e) => {
                  e.currentTarget.src = `https://api.dicebear.com/8.x/initials/svg?seed=${name}`;
                }}
              />
              <div className="flex items-center gap-3">
                <Button
                  asChild
                  size="icon"
                  className="rounded-full p-3 hover:bg-green-500/10"
                >
                  <label className="cursor-pointer">
                    <FaUpload className="h-5 w-5" />
                    <Input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        const selectedFile = e.target.files?.[0];
                        if (selectedFile) {
                          setFile(selectedFile);
                          setPreview(URL.createObjectURL(selectedFile));
                          setRemoved(false);
                        }
                      }}
                    />
                  </label>
                </Button>
                {(preview || user.avatarUrl) && (
                  <Button
                    size="icon"
                    onClick={() => {
                      setPreview("");
                      setFile(null);
                      setRemoved(true);
                    }}
                    className="hover:bg-red-500/10"
                  >
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </Button>
                )}
              </div>
            </div>

            {/* Name Input */}
            <div className="w-full sm:max-w-xs ">
              <Label htmlFor="name">Full Name</Label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full py-1 pl-3 glass-card outline-none focus:border-green-500 focus:dark:border-green-900 rounded-xl"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            onClick={save}
            disabled={loading}
            className="rounded-full glass-card hover:bg-green-500/10"
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Save className="mr-2 h-4 w-4" />
            )}
            Save Changes
          </Button>
        </CardFooter>
      </Card>

      {/* Preferences Card */}
      <Card className="shadow-md border border-green-400 dark:border-green-900 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Accessibility Preferences</CardTitle>
          <CardDescription>
            These were selected during onboarding and guide your experience.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserPreferences user={user} />
        </CardContent>
      </Card>
    </div>
  );
}
