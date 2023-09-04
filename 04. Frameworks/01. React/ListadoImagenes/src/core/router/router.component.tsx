import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "@/scenes/main";
import { routes, switchRoutes } from "./routes";
import { CheckOut } from "@/scenes/checkOut";
import { imagesCategories } from "@/core/providers/imagesLists";

export const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={switchRoutes.root}
          element={<Navigate to={routes.list(imagesCategories.kitties)} />}
        />
        <Route path={switchRoutes.checkOut} element={<CheckOut></CheckOut>} />
        <Route path={switchRoutes.list} element={<MainPage></MainPage>} />
      </Routes>
    </BrowserRouter>
  );
};
