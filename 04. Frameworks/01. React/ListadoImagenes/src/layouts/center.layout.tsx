import React from "react";
import css from "./layout.styles.css";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
}

export const CenterLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={classNames(css.centerLayoutContainer)}>{children}</div>
  );
};
