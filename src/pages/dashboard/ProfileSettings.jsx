"use client";

import React, { useState, useEffect } from "react"; // Import useEffect
import { useDashboard } from "@/context/DashboardContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save, Trash2 } from "lucide-react";
import { FaUpload } from "react-icons/fa";
import { toast } from "sonner";
import API from "@/lib/axios";

export default function ProfileSettings() {
  const { user, fetchDashboardData, setUser } = useDashboard();

  // Initialize state with empty strings; useEffect will populate when user data is ready
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Use useEffect to populate state when user data becomes available
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setAvatarPreview(user.avatarUrl || "");
    }
  }, [user]); // Depend on the 'user' object

  if (!user) {
    return <div className="text-center text-gray-500">Loading profile...</div>;
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name); // Only append name
    if (avatarFile) {
      formData.append("avatar", avatarFile); // Only append avatar if present
    }

    try {
      await API.put("/users/updateProfile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Profile updated successfully");

      // Optimistically update the context
      setUser((prev) => ({
        ...prev,
        name,
        avatarUrl: avatarPreview || prev.avatarUrl,
      }));

      // No need to fetchDashboardData here if setUser already updates context
      // fetchDashboardData(); // This might cause an extra re-fetch, consider if truly needed after optimistic update
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Public Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Avatar Upload */}
        <div className="flex items-center space-x-4">
          <img
            className="h-20 w-20 rounded-full object-cover"
            src={
              avatarPreview ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                name
              )}&background=34C759&color=fff`
            }
            alt={name}
          />
          <div className="flex items-center gap-2">
            <label htmlFor="avatar-upload">
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
              <Button variant="outline" asChild>
                <span>
                  <FaUpload className="mr-2 h-4 w-4" />
                  Upload
                </span>
              </Button>
            </label>
            <Button
              variant="ghost"
              onClick={() => {
                setAvatarPreview("");
                setAvatarFile(null);
              }}
              className="text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              disabled
              value={email}
              className="cursor-not-allowed opacity-70"
              // onChange={(e) => setEmail(e.target.value)} // Email is disabled, no need for onChange
            />
          </div>
        </div>

        {/* Save Button */}
        <Button onClick={handleSave} disabled={loading}>
          <Save className="mr-2 h-4 w-4" />
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </CardContent>
    </Card>
  );
}
