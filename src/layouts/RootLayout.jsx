// src/layouts/RootLayout.jsx
import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

export default function RootLayout() {
  const location = useLocation();
  const hideFooterOn = [
    "/onboarding",
    "/login",
    "/dashboard",
    "/forgot-password",
    "/reset-password",
    "/verify-otp"
  ];
  const showFooter = !hideFooterOn.some((p) => location.pathname.startsWith(p));

  return (
    <div>
      <ScrollRestoration />
      <Toaster position="top-right" richColors />
      <Outlet />
      {showFooter && <Footer />}
    </div>
  );
}
