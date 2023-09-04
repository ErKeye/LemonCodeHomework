import { getKittiesList, getPuppiesList } from "./api/api";
import { PictureInfo } from "./api/api.model";
import { imagesCategories } from "./imagesCategories.enum";

export interface PicturesInfoListsVM {
  [imagesCategories.puppies]: PictureInfo[];
  [imagesCategories.kitties]: PictureInfo[];
  //findPictureInfo : (id:string)=> PictureInfo,
}

export const getPicturesInfoLists = (): PicturesInfoListsVM => {
  return {
    [imagesCategories.puppies]: getPuppiesList(),
    [imagesCategories.kitties]: getKittiesList(),
  };
};
//findPictureInfo : function (id: string){ return this[petBreeds.puppies].find((picInfo=> picInfo.id === id)) && this[petBreeds.kitties].find((picInfo=> picInfo.id === id))}
