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
import { useDashboard } from "@/context/DashboardContext";

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
    <div className="glass-card p-8 space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold font-montserrat">
          Public Profile
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          This will be displayed publicly.
        </p>
      </div>

      {/* Avatar Section */}
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <img
          src={avatarSrc}
          alt="Avatar Preview"
          className="h-24 w-24 rounded-full object-cover shadow-md ring-4 ring-primaryGreen-light/30"
          onError={(e) => {
            e.currentTarget.src = `https://api.dicebear.com/8.x/initials/svg?seed=${name}`;
          }}
        />

        <div className="flex flex-col sm:flex-row items-center gap-3">
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

      {/* Name Field */}
      <div className="space-y-2 max-w-sm mx-auto">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={save} disabled={loading} className="hover:bg-green-500/10 mx-auto rounded-l-full rounded-r-full ">
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Save className="mr-2 h-4 w-4" />
          )}
          Save Changes
        </Button>
      </div>
    </div>
  );
}
