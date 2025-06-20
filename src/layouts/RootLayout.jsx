import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();
  const hideFooterRoutes = ["/onboarding"]; // Add more routes here if needed

  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <div>
      <ScrollRestoration />
      <Outlet />
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default RootLayout;
