import { PictureInfo, PicturesInfoListsVM } from "@/core/providers/imagesLists";

export interface ShoppingCartListElement extends PictureInfo {}

export const getShoppingCartElement = (
  lists: PicturesInfoListsVM,
  id: string
): ShoppingCartListElement => {
  for (const petbreed in lists) {
    const picInfo = lists[petbreed].find((picInfo) => picInfo.id === id);
    if (picInfo) return { ...picInfo };
  }
  return null;
};
