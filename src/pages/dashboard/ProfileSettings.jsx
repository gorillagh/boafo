"use client";

import React, { useState, useEffect } from "react";
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
  const [hasAvatarBeenRemoved, setHasAvatarBeenRemoved] = useState(false); // New state to track explicit removal

  // Use useEffect to populate state when user data becomes available
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      // Set initial avatar preview from user data, if available
      setAvatarPreview(user.avatarUrl || "");
      setHasAvatarBeenRemoved(false); // Reset this flag when user data loads
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
      setHasAvatarBeenRemoved(false); // If a new file is selected, it's not a removal anymore
    }
  };

  const handleRemoveAvatar = () => {
    setAvatarPreview(""); // Clear current preview
    setAvatarFile(null); // Clear the file selected for upload
    setHasAvatarBeenRemoved(true); // Set flag to signal avatar removal
    // Revoke the object URL if it was a preview of a newly selected file
    // Note: If avatarPreview was from user.avatarUrl, URL.revokeObjectURL won't work on it.
    // It's mainly for new files.
    if (avatarPreview && avatarPreview.startsWith("blob:")) {
      URL.revokeObjectURL(avatarPreview);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    const formData = new FormData();

    // Always append the name, even if it's not changed, to ensure it's sent.
    // The backend handles if it's identical.
    formData.append("name", name);

    if (avatarFile) {
      // Case 1: A new avatar file has been selected for upload
      formData.append("avatar", avatarFile);
    } else if (hasAvatarBeenRemoved) {
      // Case 2: The user explicitly clicked the 'remove' button, and no new file was selected
      formData.append("removeAvatar", "true"); // Send 'true' string as Multer expects form data fields as strings
    }
    // Case 3: No avatarFile, and hasAvatarBeenRemoved is false.
    // This means the avatar was not touched or was already null/empty.
    // In this case, neither 'avatar' nor 'removeAvatar' will be appended to formData,
    // and the backend will correctly preserve the existing avatarUrl.

    try {
      const response = await API.put("/users/updateProfile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status === "success") {
        toast.success(response.data.message);

        // Update the user context with the new data from the backend
        setUser(response.data.user);

        // Clean up the object URL if a new avatar was uploaded
        if (avatarFile && avatarPreview.startsWith("blob:")) {
          URL.revokeObjectURL(avatarPreview);
        }
        setAvatarFile(null); // Clear the temporary file state after successful upload/removal
        setHasAvatarBeenRemoved(false); // Reset the removal flag
      } else {
        toast.error(response.data.message || "Failed to update profile");
      }
    } catch (err) {
      console.error("Profile update error:", err);
      toast.error(
        err?.response?.data?.message ||
          "Failed to update profile. Please try again."
      );
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
                name || "User" // Provide a fallback for name for UI Avatar
              )}&background=34C759&color=fff`
            }
            alt={name || "User Avatar"}
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
            {/* Show remove button only if an avatar is currently displayed */}
            {(avatarPreview || user?.avatarUrl) && ( // Check if there's an avatar to remove
              <Button
                variant="ghost"
                onClick={handleRemoveAvatar} // Call the new handler
                className="text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
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
              disabled={loading} // Disable input during loading
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              disabled // Email is typically not editable by the user directly
              value={email}
              className="cursor-not-allowed opacity-70"
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
