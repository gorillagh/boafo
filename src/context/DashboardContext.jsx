
import React, { createContext, useState, useContext } from "react";

// Create the context
const DashboardContext = createContext();

// Custom hook to use the context
export const useDashboard = () => useContext(DashboardContext);

// Mock user data
const mockUser = {
  name: "Alex Doe",
  email: "alex.doe@example.com",
  avatarUrl: "https://placehold.co/100x100/E2E8F0/4A5568?text=AD",
};

// Context Provider component
export const DashboardProvider = ({ children }) => {
  const [user] = useState(mockUser);
  const [plan, setPlan] = useState("free"); // 'free' or 'pro'

  const value = {
    user,
    plan,
    setPlan,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};