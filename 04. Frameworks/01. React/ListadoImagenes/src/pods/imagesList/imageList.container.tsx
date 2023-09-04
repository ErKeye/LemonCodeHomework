import { ShoppingCartContext } from "@/core/providers/shoppingCart/shoppingCart.Context";
import React from "react";
import { PicElementVM } from "./picElementVM";
import { ImagesListComponent } from "./imageList.component";
import { getImagesList } from "./imageList.Repository";
import { PicturesInfoListsContext } from "@/core/providers/imagesLists/picturesInfoLists.Context";

const findListUnSelected = (
  imagesList: PicElementVM[],
  shoppingCart: string[]
): boolean => {
  return imagesList
    .filter((image) => image.selected)
    .reduce(
      (previousUnSelected, image) =>
        !shoppingCart.includes(image.id) || previousUnSelected,
      false
    );
};

const updateSelectedElements = (
  imagesList: PicElementVM[],
  cartElementsIds: string[]
): PicElementVM[] => {
  return imagesList.map((image) =>
    cartElementsIds.includes(image.id)
      ? { ...image, selected: true }
      : { ...image, selected: false }
  );
};

interface Props {
  category: string;
}
export const ImagesListContainer: React.FC<Props> = ({ category }) => {
  const picturesInfoLists = React.useContext(PicturesInfoListsContext);
  const { cartElementsIds, addToCart, removeFromCart } =
    React.useContext(ShoppingCartContext);
  const [imagesList, setImagesList] = React.useState(
    getImagesList(picturesInfoLists[category])
  );
  React.useEffect(
    () =>
      setImagesList(
        updateSelectedElements(
          getImagesList(picturesInfoLists[category]),
          cartElementsIds
        )
      ),
    [category]
  );

  React.useEffect(() => {
    if (findListUnSelected(imagesList, cartElementsIds))
      setImagesList(updateSelectedElements(imagesList, cartElementsIds));
  }, [cartElementsIds]);

  return (
    <ImagesListComponent
      picElements={imagesList}
      onSelected={addToCart}
      onUnselected={removeFromCart}
    ></ImagesListComponent>
  );
};
