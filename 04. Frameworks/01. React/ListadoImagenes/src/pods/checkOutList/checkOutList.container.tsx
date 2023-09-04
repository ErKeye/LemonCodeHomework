import React from "react";
import { ShoppingCartListContainer } from "../shoppingCartList/shoppingCartList.container";
import { CheckOutButtons } from "./components/checkOutButtons";
import classNames from "classnames";
import css from "./checkOut.styles.css";

export const CheckOutListContainer: React.FC = () => {
  return (
    <div className={classNames(css.checkOutContainer)}>
      <ShoppingCartListContainer></ShoppingCartListContainer>
      <CheckOutButtons></CheckOutButtons>
    </div>
  );
};
