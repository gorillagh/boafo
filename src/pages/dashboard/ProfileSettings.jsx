"use client";

import React, { useState, useEffect } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Save, Trash2 } from "lucide-react";
import { FaUpload } from "react-icons/fa";
import { toast } from "sonner";
import API from "@/lib/axios";
import { motion } from "framer-motion";
import ProfileSettingsSkeleton from "./ProfileSettingSkeleton";

export default function ProfileSettings() {
  const { user, setUser } = useDashboard();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasAvatarBeenRemoved, setHasAvatarBeenRemoved] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setAvatarPreview(user.avatarUrl || "");
      setHasAvatarBeenRemoved(false);
    }
  }, [user]);

  if (!user) return <ProfileSettingsSkeleton />;

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (avatarPreview?.startsWith("blob:")) {
        URL.revokeObjectURL(avatarPreview);
      }
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
      setHasAvatarBeenRemoved(false);
    }
  };

  const handleRemoveAvatar = () => {
    if (avatarPreview?.startsWith("blob:")) {
      URL.revokeObjectURL(avatarPreview);
    }
    setAvatarPreview("");
    setAvatarFile(null);
    setHasAvatarBeenRemoved(true);
  };

  const resolveAvatarSrc = () => {
    const isBlob = avatarPreview?.startsWith("blob:");
    const baseUrl =
      "https://boafo-accessibility-services-production-b6b5.up.railway.app";

    if (isBlob) return avatarPreview;
    if (avatarPreview) {
      return avatarPreview.startsWith("http")
        ? `${avatarPreview}?t=${Date.now()}`
        : `${baseUrl}${avatarPreview}?t=${Date.now()}`;
    }

    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name || "User"
    )}&background=34C759&color=fff`;
  };

  const handleSave = async () => {
    if (!name.trim()) {
      toast.error("Name cannot be empty.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);

    if (avatarFile) {
      formData.append("avatar", avatarFile);
    } else if (hasAvatarBeenRemoved) {
      formData.append("removeAvatar", "true");
    }

    try {
      const response = await API.put("/users/updateProfile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.status === "success") {
        const updatedUser = {
          ...response.data.user,
          avatarUrl: response.data.user.avatarUrl
            ? `${response.data.user.avatarUrl}?t=${Date.now()}`
            : "",
        };

        setUser(updatedUser);
        toast.success(response.data.message);

        if (avatarPreview?.startsWith("blob:")) {
          URL.revokeObjectURL(avatarPreview);
        }

        setAvatarFile(null);
        setHasAvatarBeenRemoved(false);
      } else {
        toast.error(response.data.message || "Failed to update profile.");
      }
    } catch (err) {
      console.error("Profile update error:", err);
      toast.error(err?.response?.data?.message || "Something went wrong.");
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
        <div className="flex items-center space-x-4">
          <motion.img
            key={avatarPreview || name}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="h-20 w-20 rounded-full object-cover"
            src={resolveAvatarSrc()}
            alt={name || "User Avatar"}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                name || "User"
              )}&background=34C759&color=fff`;
            }}
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
            {(avatarPreview || user?.avatarUrl) && (
              <Button
                variant="ghost"
                onClick={handleRemoveAvatar}
                className="text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
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
            />
          </div>
        </div>

        <Button onClick={handleSave} disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
