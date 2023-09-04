import { PictureInfo } from "./api/api.model";
import { imagesCategories } from "./imagesCategories.enum";

export interface PicturesInfoListsContextVM {
  [imagesCategories.puppies]: PictureInfo[];
  [imagesCategories.kitties]: PictureInfo[];
}

export const getEmptyPicturesInfoListsContext =
  (): PicturesInfoListsContextVM => {
    return {
      [imagesCategories.puppies]: [],
      [imagesCategories.kitties]: [],
    };
  };
