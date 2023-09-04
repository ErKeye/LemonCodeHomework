import React from "react";
import { ShoppingCartProvider } from "./core/providers/shoppingCart/shoppingCart.Provider";
import { RouterComponent } from "./core/router/router.component";
import { PicturesInfoListsProvider } from "./core/providers/imagesLists";

export const App = () => {
  return (
    <PicturesInfoListsProvider>
      <ShoppingCartProvider>
        <RouterComponent />
      </ShoppingCartProvider>
    </PicturesInfoListsProvider>
  );
};
