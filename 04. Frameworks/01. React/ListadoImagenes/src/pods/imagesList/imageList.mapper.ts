import { PictureInfo } from "@/core/providers/imagesLists/api/api.model";
import { PicElementVM } from "./picElementVM";


export const mapFromPictureInfo = (picInfo: PictureInfo): PicElementVM => {
  return {
    ...picInfo,
    selected: false,
  };
};
