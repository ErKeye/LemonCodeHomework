import React from "react";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { ImagesListContainer } from "@/pods/imagesList";
import { AppCartLayout, AppNoCartLayout } from "@/layouts";
import { ShoppingCartContext } from "@/core/providers/shoppingCart";
import { ShoppingCartContainer } from "@/pods";

export const MainPage: React.FC = () => {
  const { visible } = React.useContext(ShoppingCartContext);
  const { petBreed } = useParams();
  return !visible ? (
    <AppNoCartLayout>
      <ImagesListContainer category={petBreed}></ImagesListContainer>
    </AppNoCartLayout>
  ) : (
    <AppCartLayout>
      <ImagesListContainer category={petBreed}></ImagesListContainer>
      <Divider orientation="vertical" variant="middle" flexItem />
      <ShoppingCartContainer></ShoppingCartContainer>
    </AppCartLayout>
  );
};
