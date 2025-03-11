import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import BackToTop from "./components/BackToTop";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Home /> }],
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
