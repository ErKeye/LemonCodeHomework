import React from "react";
import { PicElementCard } from "./components/picElementCard.component";
import { PicElementVM } from "./picElementVM";
import classNames from "classnames";
import css from "./imageList.Styles.css";

interface Props {
  picElements: PicElementVM[];
  onSelected: (id: string) => void;
  onUnselected: (id: string) => void;
}

export const ImagesListComponent: React.FC<Props> = ({
  picElements,
  onSelected,
  onUnselected,
}) => {
  return (
    <div className={classNames(css.imagesListContainer)}>
      {picElements.map((picElement) => (
        <PicElementCard
          key={picElement.id}
          picElement={picElement}
          onSelected={onSelected}
          onUnselected={onUnselected}
        ></PicElementCard>
      ))}
    </div>
  );
};
