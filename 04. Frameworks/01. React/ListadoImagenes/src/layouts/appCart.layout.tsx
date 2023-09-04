import { NavigationBarContainer } from "@/pods/navigationBar/navigationBar.container";
import Box from "@mui/material/Box";
import classNames from "classnames";
import css from "./layout.styles.css";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppCartLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
      <NavigationBarContainer></NavigationBarContainer>
      <div className={classNames(css.appLayoutContainer)}>{children}</div>
    </Box>
  );
};
