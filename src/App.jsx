import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import OnboardingFlow from "./pages/onboarding/OnboardingFlow";
import Login from "./pages/login";
import BackToTop from "./components/BackToTop";

// Dashboard
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/dashboard/index";
import BillingPage from "./pages/dashboard/billing";
import ProfilePage from "./pages/dashboard/profile";
import SettingsPage from "./pages/dashboard/settings";
import ShortcutsPage from "./pages/dashboard/shortcuts";
import TutorialsPage from "./pages/dashboard/tutorials";

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

        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            { index: true, element: <DashboardPage /> },
            { path: "billing", element: <BillingPage /> },
            { path: "profile", element: <ProfilePage /> },
            { path: "settings", element: <SettingsPage /> },
            { path: "shortcuts", element: <ShortcutsPage /> },
            { path: "tutorials", element: <TutorialsPage /> },
          ],
        },
      ],
    },
    // 404 route can go here if desired
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
