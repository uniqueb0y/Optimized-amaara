import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FC } from "react";
import { SideNav } from "../../Component/SideNav";
import { Box, Typography } from "@mui/material";

export const ProtectedRoute: FC<any> = ({ children }) => {
  const { currentUser } = useAuth();
  let location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return (
    <Box>
      <SideNav />
    </Box>
  );
};
