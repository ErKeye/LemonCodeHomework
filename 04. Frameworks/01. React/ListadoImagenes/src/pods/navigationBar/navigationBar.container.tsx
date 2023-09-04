import { PicturesInfoListsContext } from "@/core/providers/imagesLists/picturesInfoLists.Context";
import { ShoppingCartContext } from "@/core/providers/shoppingCart/shoppingCart.Context";
import React from "react";
import { NavigationBarComponent } from "./navigationBar.component";

export const NavigationBarContainer: React.FC = () => {
  const picturesInfoList = React.useContext(PicturesInfoListsContext);
  const { setVisible, visible } = React.useContext(ShoppingCartContext);
  const [petBreedList, setPetBreedList] = React.useState<string[]>(
    Object.keys(picturesInfoList)
  );
  React.useEffect(() => {
    setPetBreedList(Object.keys(picturesInfoList));
  }, [picturesInfoList]);
  return (
    <NavigationBarComponent
      pageLinksList={petBreedList}
      showShoppingCart={visible}
      setShowShoppingCart={setVisible}
    ></NavigationBarComponent>
  );
};
