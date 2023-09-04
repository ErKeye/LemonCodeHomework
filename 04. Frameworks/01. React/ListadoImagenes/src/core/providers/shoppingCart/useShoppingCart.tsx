import React from "react";

export const useShoppingCart = () => {
  const [cartElementsIds, setCartElements] = React.useState<string[]>([]);
  const [visible, setVisible] = React.useState<boolean>(true);
  const refCartElements = React.useRef(cartElementsIds);
  React.useEffect(() => {
    refCartElements.current = cartElementsIds;
  }, [cartElementsIds]);
  const removeFromCart = (elementId) =>
    setCartElements([
      ...refCartElements.current.filter((element) => element !== elementId),
    ]);
  const emptyCart = () => {
    setCartElements([]);
  };
  const addToCart = (elementId) =>
    setCartElements([...refCartElements.current, elementId]);
  return {
    cartElementsIds,
    addToCart,
    removeFromCart,
    emptyCart,
    visible,
    setVisible,
  };
};
