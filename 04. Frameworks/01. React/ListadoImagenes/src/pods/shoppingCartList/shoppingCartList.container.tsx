import React from "react";
import { ShoppingCartListComponent } from "./shoppingCartList.component";
import {
  getShoppingCartElement,
  ShoppingCartListElement,
} from "./shoppingCartListElement.VM";
import { PicturesInfoListsContext } from "@/core/providers/imagesLists";
import { ShoppingCartContext } from "@/core/providers/shoppingCart";

export const ShoppingCartListContainer: React.FC = () => {
  const picturesInfoLists = React.useContext(PicturesInfoListsContext);
  const { cartElementsIds, removeFromCart } =
    React.useContext(ShoppingCartContext);
  const [cartElements, setCartElements] =
    React.useState<ShoppingCartListElement[]>(null);
  React.useEffect(() => {
    setCartElements(
      cartElementsIds.map((cartElementId) =>
        getShoppingCartElement(picturesInfoLists, cartElementId)
      )
    );
  }, [cartElementsIds]);
  return (
    <ShoppingCartListComponent
      cartElements={cartElements}
      onDeleteElement={removeFromCart}
    ></ShoppingCartListComponent>
  );
};
