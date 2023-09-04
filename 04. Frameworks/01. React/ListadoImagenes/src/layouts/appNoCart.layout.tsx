import { NavigationBarContainer } from "@/pods/navigationBar/navigationBar.container";
import Box from "@mui/material/Box";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppNoCartLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <NavigationBarContainer></NavigationBarContainer>
      {children}
    </Box>
  );
};
