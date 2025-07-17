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
import Logo from "@/components/Logo";

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
    <section className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-secondaryGreen-light to-gray-50 dark:from-[#0D0D0D] dark:via-secondaryGreen-dark dark:to-[#0D0D0D] opacity-80 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/pattern-dots-light.png')] dark:bg-[url('/pattern-dots-dark.png')] bg-repeat opacity-5 -z-10"></div>

      <div className="relative glass-card max-w-lg w-full p-8 text-center my-8 mx-4">
        {/* Logo */}
        <Logo />

        <h2 className="font-montserrat font-bold text-2xl text-textColor-light dark:text-textColor-dark mb-4">
          Forgot Password
        </h2>
        <p className="font-ubuntu text-xs text-textColor-light dark:text-textColor-dark mb-8 max-w-md mx-auto">
          Enter your email to receive a reset code.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm mx-auto"
        >
          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full placeholder:text-xs text-sm p-2 pl-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="primary-button text-sm w-full py-3 mb-4"
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
