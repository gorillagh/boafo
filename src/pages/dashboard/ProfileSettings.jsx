"use client";
import React, { useState, useEffect } from "react";
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
    <div className="glass-card p-8 max-w-2xl mx-auto flex flex-col items-center gap-8 shadow-lg rounded-2xl border border-border/30">
      {/* Avatar Preview + Upload */}
      <div className="flex flex-col items-center space-y-4">
        <img
          src={avatarSrc}
          alt="Avatar"
          className="h-28 w-28 rounded-full object-cover shadow-md ring-4 ring-primaryGreen-light/30"
          onError={(e) => {
            e.currentTarget.src = `https://api.dicebear.com/8.x/initials/svg?seed=${name}`;
          }}
        />

        <div className="flex gap-2">
          <Button
            asChild
            variant="outline"
            className="bg-background/60 backdrop-blur-md"
          >
            <label className="cursor-pointer">
              <FaUpload className="mr-2 h-4 w-4" />
              Upload
              <Input
                type="file"
                accept="image/*"
                className="hidden"
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
              variant="ghost"
              size="icon"
              onClick={() => {
                setPreview("");
                setFile(null);
                setRemoved(true);
              }}
              className="hover:bg-destructive/10"
            >
              <Trash2 className="h-4 w-4 text-muted-foreground" />
            </Button>
          )}
        </div>
      </div>

      {/* Name Field */}
      <div className="w-full max-w-sm text-left space-y-2">
        <Label htmlFor="name" className="text-sm text-foreground/80">
          Display Name
        </Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-background/60 backdrop-blur-md border border-border/20 focus:ring-primaryGreen-light"
        />
      </div>

      {/* Save Button */}
      <Button
        onClick={save}
        disabled={loading}
        className="w-full max-w-sm bg-primaryGreen-light hover:bg-primaryGreen-dark transition-colors duration-200 text-white"
      >
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Save className="mr-2 h-4 w-4" />
        )}
        Save Changes
      </Button>
    </div>
  );
}
