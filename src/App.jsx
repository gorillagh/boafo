import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import BackToTop from "./components/BackToTop";
import Privacy from "./pages/privacy";
import OnboardingLayout from "./pages/onboarding/OnboardingLayout";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "privacy", element: <Privacy /> },
        {
          path: "onboarding",
          element: <OnboardingLayout />,
          children: [
            { index: true, element: <SignUpPage /> },
            { path: "step2", element: <OnboardingStep2 /> },
            { path: "step3", element: <OnboardingStep3 /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <BackToTop />
    </>
  );
}

export default App;
