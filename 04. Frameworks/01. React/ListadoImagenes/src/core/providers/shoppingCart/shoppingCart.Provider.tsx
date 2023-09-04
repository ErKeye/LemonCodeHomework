import React from "react";
import { ShoppingCartContext } from "./shoppingCart.Context";
import { useShoppingCart } from "./useShoppingCart";

interface Props {
  children: React.ReactNode;
}

export const ShoppingCartProvider = ({ children }: Props) => {
  const {
    cartElementsIds,
    addToCart,
    removeFromCart,
    emptyCart,
    visible,
    setVisible,
  } = useShoppingCart();
  return (
    <ShoppingCartContext.Provider
      value={{
        cartElementsIds,
        addToCart,
        removeFromCart,
        emptyCart,
        visible,
        setVisible,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
1;
