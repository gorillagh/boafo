// src/pages/signup/SignUp.jsx
"use client";

import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import API from "@/lib/axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Logo from "@/components/Logo";
import { GoogleLogin } from "@react-oauth/google";
import { saveToken } from "@/lib/authHelpers";

// Validation schema: Increased password minimum length to match backend
const formSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function SignUp({ data }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data?.name || "",
      email: data?.email || "",
      password: data?.password || "",
      confirmPassword: data?.password || "",
    },
  });

  // Updated onSubmit to match the new backend flow
  const onSubmit = async (formData) => {
    setLoading(true);
    const normalizedEmail = formData.email.trim().toLowerCase();
    try {
      // Endpoint updated to /users/register
      const res = await API.post("/users/register", {
        name: formData.name,
        email: normalizedEmail,
        password: formData.password,
      });

      // The backend now returns the email in the response data
      const { email } = res.data.data;

      if (!email) throw new Error("No email returned from server");

      // Use the API's success message
      toast.success(
        res.data.message || "Account created. OTP sent to your email."
      );

      // Navigate to the verify page with the email as a query parameter
      navigate(`/verify-otp?email=${encodeURIComponent(email)}`);
    } catch (err) {
      const apiErr = err.response?.data;
      const message = apiErr?.message || "Registration failed";

      // Handle the specific case where the user already exists and is verified
      if (err.response?.status === 409) {
        toast.error(message);
        setTimeout(() => navigate("/login"), 2000); // Redirect to login
      } else {
        toast.error(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (response) => {
    if (!response?.credential) {
      toast.error("No credential returned from Google.");
      return;
    }
    setLoading(true);
    try {
      const res = await API.post("/users/google-auth", {
        token: response.credential,
      });
      const { accessToken, redirectToOnboarding } = res.data;
      if (!accessToken) throw new Error("No token received");

      saveToken(accessToken);
      toast.success("Signed in with Google!");

      if (redirectToOnboarding) {
        navigate("/onboardingFlow");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Google signup error", error);
      const apiErr = error.response?.data;
      if (apiErr?.redirectToOnboarding) {
        toast.error(apiErr.message);
        navigate("/onboardingFlow");
      } else {
        toast.error(apiErr?.message || "Google sign-in failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-secondaryGreen-light to-gray-50 dark:from-[#0D0D0D] dark:via-secondaryGreen-dark dark:to-[#0D0D0D] opacity-80 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/pattern-dots-light.png')] dark:bg-[url('/pattern-dots-dark.png')] bg-repeat opacity-5 -z-10"></div>

      <div className="relative glass-card max-w-lg w-full p-8 flex flex-col items-center">
        <Logo />

        <h2 className="font-montserrat font-bold text-2xl text-textColor-light dark:text-textColor-dark mb-4">
          Create Your Account
        </h2>
        <p className="font-ubuntu text-xs text-textColor-light dark:text-textColor-dark mb-8 max-w-md mx-auto">
          Sign up to start your journey with Boafo.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm mx-auto"
        >
          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="w-full placeholder:text-xs text-sm p-2 pl-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full placeholder:text-xs text-sm p-2 pl-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
              className="w-full placeholder:text-xs text-sm p-2 pl-4 pr-10 rounded-xl bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6 relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="w-full placeholder:text-xs text-sm p-2 pl-4 pr-10 rounded-xl bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-gray-400"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
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
              "Sign Up"
            )}
          </button>
        </form>

        <p className="text-textColor-light text-xs dark:text-textColor-dark mb-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primaryGreen-light dark:text-primaryGreen-dark hover:underline"
          >
            Log in
          </Link>
        </p>

        {/* Divider */}
        <div className="relative w-full max-w-sm mx-auto flex items-center justify-center mb-6">
          <span className="absolute text-sm bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400 z-10">
            or
          </span>
          <div className="absolute w-full h-px bg-gray-200 dark:bg-gray-700"></div>
        </div>

        {/* Google Login */}
        {loading ? (
          <div className="w-full flex justify-center">
            <Loader2 className="animate-spin h-5 w-5 text-gray-500" />
          </div>
        ) : (
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => toast.error("Google sign-up failed.")}
            useOneTap
            theme="outline"
            shape="pill"
            text="continue_with"
          />
        )}
      </div>
    </section>
  );
}
