import { PictureInfo } from "@/core/providers/imagesLists/api/api.model";
import { mapFromPictureInfo } from "./imageList.mapper";

export const getImagesList = (picturesInfoList: PictureInfo[]) => {
  return picturesInfoList.map(mapFromPictureInfo);
};
