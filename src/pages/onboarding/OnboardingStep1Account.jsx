"use client";

import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import API from "@/lib/axios";

// Schema that matches backend expectations
const formSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function OnboardingStep1Account({
  onContinue,
  updateData,
  data,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: data.email || "",
      password: data.password || "",
      confirmPassword: data.password || "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      const res = await API.post("/users/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      updateData("email", formData.email);
      updateData("password", formData.password);
      onContinue();
    } catch (err) {
      const message = err.response?.data?.message || "Registration failed";
      alert(message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-montserrat font-bold text-3xl text-textColor-light dark:text-textColor-dark mb-4">
        Create Your Account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        {/* Name */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
            className="w-full p-3 pr-10 rounded-md bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
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
            className="w-full p-3 pr-10 rounded-md bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-gray-400"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button type="submit" className="primary-button w-full py-3 mb-4">
          Continue
        </button>
      </form>

      <p className="text-textColor-light dark:text-textColor-dark mb-4">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-primaryGreen-light dark:text-primaryGreen-dark hover:underline"
        >
          Log in
        </a>
      </p>

      <div className="relative w-full max-w-sm flex items-center justify-center mb-6">
        <span className="absolute bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400 z-10">
          or
        </span>
        <div className="absolute w-full h-px bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <button className="secondary-button w-full py-3 mb-3 flex items-center justify-center border-gray-300 dark:border-gray-600">
        <FaGoogle className="mr-2 text-lg" /> Continue with Google
      </button>
    </div>
  );
}
