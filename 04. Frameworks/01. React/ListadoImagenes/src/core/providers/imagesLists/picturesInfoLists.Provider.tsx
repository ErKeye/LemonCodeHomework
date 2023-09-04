import React from "react";
import {
  getPicturesInfoLists,
  PicturesInfoListsVM,
} from "./picturesInfoList.VM";
import { PicturesInfoListsContext } from "./picturesInfoLists.Context";

interface Props {
  children: React.ReactNode;
}

export const PicturesInfoListsProvider: React.FC<Props> = ({ children }) => {
  const [picturesInfoListsContextVM, setPicturesInfoListsContextVM] =
    React.useState<PicturesInfoListsVM>(getPicturesInfoLists);
  return (
    <PicturesInfoListsContext.Provider value={picturesInfoListsContextVM}>
      {children}
    </PicturesInfoListsContext.Provider>
  );
};
