
"use client";

import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom'; 

const loginFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (formData) => {
    console.log('Logging in with:', formData);
    // Here you would typically send formData to your authentication API
    // On successful login, you might redirect the user, e.g., to the home page or a dashboard.
    // For now, let's just log and then redirect to home
    navigate('/');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden relative pb-16">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-secondaryGreen-light to-gray-50 dark:from-[#0D0D0D] dark:via-secondaryGreen-dark dark:to-[#0D0D0D] opacity-80 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/pattern-dots-light.png')] dark:bg-[url('/pattern-dots-dark.png')] bg-repeat opacity-5 -z-10"></div>

      <div className="relative glass-card max-w-3xl w-full p-8 md:p-12 text-center my-8 mx-4">
        <div className="mb-8">
          <span className="font-montserrat font-bold text-3xl text-textColor-light dark:text-textColor-dark flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11 16H13V8H11V16ZM8 12H10V8H8V12ZM14 12H16V8H14V12Z"
                fill="url(#gradient-logo)"
              />
              <defs>
                <linearGradient
                  id="gradient-logo"
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="22"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#34C759" />
                  <stop offset="1" stopColor="#2DB54F" />
                </linearGradient>
              </defs>
            </svg>
            Boafo
          </span>
        </div>

        <h2 className="font-montserrat font-bold text-3xl text-textColor-light dark:text-textColor-dark mb-4">
          Welcome Back!
        </h2>
        <p className="font-ubuntu text-textColor-light dark:text-textColor-dark mb-8 max-w-md mx-auto">
          Sign in to continue your journey with Boafo.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password')}
              className="w-full p-3 pr-10 rounded-md bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button type="submit" className="primary-button w-full py-3 mb-4">
            Sign In
          </button>
        </form>

        <p className="text-textColor-light dark:text-textColor-dark mb-4">
          Don't have an account?{' '}
          <a href="/onboarding" className="text-primaryGreen-light dark:text-primaryGreen-dark hover:underline">
            Sign Up
          </a>
        </p>

        <div className="relative w-full max-w-sm mx-auto flex items-center justify-center mb-6">
          <span className="absolute bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400 z-10">or</span>
          <div className="absolute w-full h-px bg-gray-200 dark:bg-gray-700"></div>
        </div>

        <button className="secondary-button w-full max-w-sm mx-auto py-3 mb-3 flex items-center justify-center border-gray-300 dark:border-gray-600">
          <FaGoogle className="mr-2 text-lg" /> Continue with Google
        </button>
      </div>
    </section>
  );
}