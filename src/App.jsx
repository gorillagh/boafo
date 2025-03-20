import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import BackToTop from "./components/BackToTop";
import Privacy from "./pages/privacy";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/privacy", element: <Privacy /> },
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
