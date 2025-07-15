// src/pages/resetPassword/ResetPassword.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import API from "@/lib/axios";
import { Loader2 } from "lucide-react";

const resetSchema = z
  .object({
    email: z.string().email("Invalid email"),
    resetCode: z.string().min(4, "Code must be at least 4 digits"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function ResetPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const storedEmail = localStorage.getItem("reset_email") || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: zodResolver(resetSchema) });

  useEffect(() => {
    if (storedEmail) {
      setValue("email", storedEmail);
    }
  }, [storedEmail, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await API.post("/users/resetPassword", data);
      toast.success("Password reset successfully");
      localStorage.removeItem("reset_email");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-gray-900">
      <div className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Reset Password
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            placeholder="Email"
            {...register("email")}
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            placeholder="Reset Code"
            {...register("resetCode")}
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
          />
          {errors.resetCode && (
            <p className="text-red-500 text-sm">{errors.resetCode.message}</p>
          )}

          <input
            type="password"
            placeholder="New Password"
            {...register("newPassword")}
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
          )}

          <input
            type="password"
            placeholder="Confirm New Password"
            {...register("confirmPassword")}
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}

          <button
            type="submit"
            className="primary-button w-full py-3"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin mx-auto" />
            ) : (
              "Reset Password"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
