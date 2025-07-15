// src/pages/forgotPassword/ForgotPassword.jsx
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import API from "@/lib/axios";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const forgotPasswordSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

export default function ForgotPassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(forgotPasswordSchema) });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await API.post("/users/forgotPassword", data);
      localStorage.setItem("reset_email", data.email);
      toast.success("Reset code sent to your email");
      navigate("/reset-password");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send reset code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-gray-900">
      <div className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Forgot Password
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Enter your email to receive a reset code.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <button
            type="submit"
            className="primary-button w-full py-3"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin mx-auto" />
            ) : (
              "Send Reset Code"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
