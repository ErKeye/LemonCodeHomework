import React from "react";
import { ShoppingCartButtons } from "./components/shoppingCartButtons.component";
import { ShoppingCartListContainer } from "../shoppingCartList/shoppingCartList.container";
import { ShoppingCartContext } from "@/core/providers/shoppingCart";
import classNames from "classnames";
import css from "./shoppingCart.styles.css";

export const ShoppingCartContainer: React.FC = () => {
  const { cartElementsIds } = React.useContext(ShoppingCartContext);
  return (
    <div className={classNames(css.shoppingCartContainer)}>
      <ShoppingCartListContainer></ShoppingCartListContainer>
      {cartElementsIds && cartElementsIds.length > 0 ? (
        <ShoppingCartButtons></ShoppingCartButtons>
      ) : (
        <></>
      )}
    </div>
  );
};
