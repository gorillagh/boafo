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

import BackToTop from "./components/BackToTop";

// Dashboard
import DashboardLayout from "./layouts/DashboardLayout";
import { DashboardProvider } from "./context/DashboardContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import DashboardPage from "./pages/dashboard/DashboardPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import NotFound from "./components/NotFound";

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
     { path: "*", element: <NotFound /> }
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
