import React from "react";
import { Navigate } from "react-router-dom";
import Unauthorized from "./Unauthorized";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); 


  if (!isAuthenticated ) {
    return <Unauthorized />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
