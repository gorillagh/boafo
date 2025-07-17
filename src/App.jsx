// src/App.jsx

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import OnboardingFlow from "./pages/onboarding/OnboardingFlow";
import Login from "./pages/login/login";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";

import BackToTop from "./components/BackToTop";

// Dashboard
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import DashboardPage from "./pages/dashboard/DashboardPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import NotFound from "./components/NotFound";

// ✅ Import the provider here
import { DashboardProvider } from "./context/dashboard/DashboardContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "privacy", element: <Privacy /> },
        { path: "onboarding", element: <OnboardingFlow /> },
        { path: "login", element: <Login /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "reset-password", element: <ResetPassword /> },
        {
          path: "dashboard",
          // ✅ FIXED: Wrap the layout with the provider HERE
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