import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";
import Loader from "../Loader";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = pending

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      toast.error("Please Sign up to access this page.");
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated === null) {
    return <Loader text="Checking authentication..." />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/onboarding" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
