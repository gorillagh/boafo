// src/App.jsx

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import SignUp from "./pages/signup/SignUp";
import OnboardingFlow from "./pages/onboarding/OnboardingFlow";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";

import BackToTop from "./components/BackToTop";

// Dashboard
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import DashboardPage from "./pages/dashboard/DashboardPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import NotFound from "./components/NotFound";

// Dashboard provider
import { DashboardProvider } from "./context/dashboard/DashboardContext";
import VerifyOtp from "./pages/signup/VerifyOtp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "privacy", element: <Privacy /> },
        { path: "onboarding", element: <SignUp /> },
        { path: "login", element: <Login /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "verify-otp", element: <VerifyOtp /> },
        

        // ✅ Protect onboardingFlow using route nesting
        {
          element: <ProtectedRoute />,
          children: [{ path: "onboardingFlow", element: <OnboardingFlow /> }],
        },

        // ✅ Protected Dashboard
        {
          path: "dashboard",
          element: (
            <ProtectedRoute>
              <DashboardProvider>
                <DashboardLayout />
              </DashboardProvider>
            </ProtectedRoute>
          ),
          children: [
            { index: true, element: <DashboardPage /> },
            { path: "settings", element: <SettingsPage /> },
          ],
        },
      ],
    },

    { path: "*", element: <NotFound /> },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
